import { Entity, InputAction, MeshCollider, Transform, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { GameController } from '../../controllers/gameController'
import { AudioManager } from './audio/audio.manager'
import { delay } from './delay'
import { ArrowTargeter } from './targeter'

//This is the rotation order of the pieces
const pieceState = [0, 45, 90, 135, 180, 225, 270, 315]

//3 sets of puzzle pieces
export class ConnectMiniGame {
  board: Entity = engine.addEntity()
  board_mat: string = ''
  pieces: Piece[] = []
  debug: boolean = true
  firstConection: boolean = false
  boardCompleted: boolean = false

  //Once is completed this callback is called this also avoids cycling dependencies
  completeEvent2PuzzleCallback: Function = () => {}
  puzzle_cable_1_off: Entity = engine.addEntity()
  puzzle_cable_2_off: Entity = engine.addEntity()
  puzzle_cable_3_off: Entity = engine.addEntity()
  puzzle_cable_1_on: Entity = engine.addEntity()
  puzzle_cable_2_on: Entity = engine.addEntity()
  puzzle_cable_3_on: Entity = engine.addEntity()
  tubeON_1: Entity = engine.addEntity()
  tubeON_2: Entity = engine.addEntity()
  tubeON_3: Entity = engine.addEntity()
  tubeOFF_1: Entity = engine.addEntity()
  tubeOFF_2: Entity = engine.addEntity()
  tubeOFF_3: Entity = engine.addEntity()
  pieceTargeter_1: ArrowTargeter
  pieceTargeter_2: ArrowTargeter
  pieceTargeter_3: ArrowTargeter
  bStarted: boolean = false
  piecesActivated: boolean = false
  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.pieceTargeter_1 = this.gameController.mainInstance.tubeArrow_1
    this.pieceTargeter_2 = this.gameController.mainInstance.tubeArrow_2
    this.pieceTargeter_3 = this.gameController.mainInstance.tubeArrow_3
    this.getPieces()
  }

  getPieces() {
    this.puzzle_cable_1_off = this.gameController.mainInstance.s0_Sign_01_OFF_01
    this.puzzle_cable_1_on = this.gameController.mainInstance.s0_Sign_01_ON_01
    this.puzzle_cable_2_off = this.gameController.mainInstance.s0_Sign_02_OFF_01
    this.puzzle_cable_2_on = this.gameController.mainInstance.s0_Sign_02_ON_01
    this.puzzle_cable_3_off = this.gameController.mainInstance.s0_Sign_03_OFF_01
    this.puzzle_cable_3_on = this.gameController.mainInstance.s0_Sign_03_ON_01
    this.tubeON_1 = this.gameController.mainInstance.s0_tube_01_ON_01
    this.tubeON_2 = this.gameController.mainInstance.s0_tube_02_ON_01
    this.tubeON_3 = this.gameController.mainInstance.s0_tube_03_ON_01
    this.tubeOFF_1 = this.gameController.mainInstance.s0_tube_01_OFF_01
    this.tubeOFF_2 = this.gameController.mainInstance.s0_tube_02_OFF_01
    this.tubeOFF_3 = this.gameController.mainInstance.s0_tube_03_OFF_01

    Transform.getMutable(this.puzzle_cable_1_off).scale = Vector3.create(1, 1, 1)
    Transform.getMutable(this.puzzle_cable_1_on).scale = Vector3.create(0, 0, 0)
    Transform.getMutable(this.puzzle_cable_2_off).scale = Vector3.create(1, 1, 1)
    Transform.getMutable(this.puzzle_cable_2_on).scale = Vector3.create(0, 0, 0)
    Transform.getMutable(this.puzzle_cable_3_off).scale = Vector3.create(1, 1, 1)
    Transform.getMutable(this.puzzle_cable_3_on).scale = Vector3.create(0, 0, 0)
  }

  startGame() {
    if (this.bStarted) return
    this.bStarted = true

    this.pieces.push(
      new Piece(
        this.gameController.mainInstance.s0_tube_01_01,
        this.puzzle_cable_1_on,
        this.puzzle_cable_1_off,
        3,
        0,
        this.gameController,
        this.tubeON_1,
        this.tubeOFF_1,
        this.pieceTargeter_1
      )
    )
    this.pieces.push(
      new Piece(
        this.gameController.mainInstance.s0_tube_02_01,
        this.puzzle_cable_2_on,
        this.puzzle_cable_2_off,
        4,
        0,
        this.gameController,
        this.tubeON_2,
        this.tubeOFF_2,
        this.pieceTargeter_2
      )
    )
    this.pieces.push(
      new Piece(
        this.gameController.mainInstance.s0_tube_03_01,
        this.puzzle_cable_3_on,
        this.puzzle_cable_3_off,
        5,
        0,
        this.gameController,
        this.tubeON_3,
        this.tubeOFF_3,
        this.pieceTargeter_3
      )
    )

    this.boardControl()
  }

  activatePieces() {
    if (this.piecesActivated) return
    this.piecesActivated = true
    for (let i = 0; i < this.pieces.length; i++) {
      this.pieces[i].pieceTargeter.showArrow(true)
    }
  }

  boardControl() {
    for (let i = 0; i < this.pieces.length; i++) {
      let piece = this.pieces[i].getEntity()
      if (this.pieces[i].correctState != this.pieces[i].currentState) {
        pointerEventsSystem.onPointerDown(
          {
            entity: piece,
            opts: {
              button: InputAction.IA_POINTER,
              hoverText: 'Interact'
            }
          },
          () => {
            if (this.piecesActivated == false) return
            this.pieces[i].nextState(i)
            this.checkBoard()
          }
        )
      }
    }
  }

  checkBoard() {
    let correct = 0
    for (let i = 0; i < this.pieces.length; i++) {
      if (this.pieces[i].correctState == this.pieces[i].currentState) {
        if (!this.firstConection) {
          this.firstConection = true
          delay(() => {
            openDialogWindow(this.gameController.questPuzzle.kit.entity, this.gameController.dialogs.kitDialog, 3)
            // getHUD().wgPopUpControls.showCameraModeImage(false)
            // getHUD().wgPopUpControls.showCablesImage(true)
          }, 500)
        }

        if (this.checkallPieces()) {
          console.log('check all pieces')
          this.boardCompleted = true
        }
        if (this.boardCompleted) {
          console.log('board completed')
          this.completeEvent2PuzzleCallback()
        }
      }
    }

    if (this.boardCompleted) {
      console.log('board completed')
      this.completeEvent2PuzzleCallback()
    }
  }
  private checkallPieces() {
    let finish = true
    for (let i = 0; i < this.pieces.length; i++) {
      if (!this.pieces[i].checkState()) {
        return false
      }
    }
    for (let i = 0; i < this.pieces.length; i++) {
      pointerEventsSystem.removeOnPointerDown(this.pieces[i].getEntity())
    }
    return finish
  }

  isGameCompleted() {
    return this.boardCompleted
  }
}

class Piece {
  piece_box: Entity
  currentState: number = 0
  piece_mat: string
  debug: boolean = true
  correctState: number
  red_mat: string = '' //Wrong Position Mat
  green_mat: string = '' //Good Position Mat
  puzzle_cables_on: Entity
  puzzle_cables_off: Entity
  piece: Entity
  gameController: GameController
  rotationDegrees: number = 45
  tubeON: Entity = engine.addEntity()
  tubeOFF: Entity = engine.addEntity()
  pieceTargeter: ArrowTargeter
  constructor(
    _entity: Entity,
    puzzle_cables_on: Entity,
    puzzle_cables_off: Entity,
    _startState: number = 0,
    _correctState: number = 2,
    gameController: GameController,
    tubeON: Entity,
    tubeOFF: Entity,
    pieceTargeter: ArrowTargeter
  ) {
    this.piece = engine.addEntity()
    Transform.create(this.piece, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.fromEulerDegrees(0, 0, 0),
      scale: Vector3.create(1, 1, 1)
    })
    this.gameController = gameController
    this.piece_box = _entity
    MeshCollider.setBox(this.piece)
    Transform.getMutable(this.piece).parent = _entity
    this.correctState = _correctState
    this.puzzle_cables_on = puzzle_cables_on
    this.puzzle_cables_off = puzzle_cables_off
    this.piece_mat = this.red_mat
    this.tubeON = tubeON
    this.tubeOFF = tubeOFF
    this.pieceTargeter = pieceTargeter
    this.setState(_startState)
  }

  nextState(i: number) {
    this.currentState++
    const transform = Transform.get(this.piece_box)
    // Crea un cuaternión que represente la rotación adicional de 45 grados alrededor del eje Y
    this.rotationDegrees = 45
    const rotationQuaternion = Quaternion.fromEulerDegrees(this.rotationDegrees, 0, 0)
    if (i === 0) {
      Transform.createOrReplace(this.gameController.mainInstance.s0_tube_01_01, {
        position: Vector3.create(98.704, 78.82, 140.141),
        rotation: Quaternion.multiply(transform.rotation, rotationQuaternion),
        scale: Vector3.create(1, 1, 1),
        parent: this.gameController.mainInstance.s0_Puzlemachines_01
      })
    } else if (i === 1) {
      Transform.createOrReplace(this.gameController.mainInstance.s0_tube_02_01, {
        position: Vector3.create(99.083, 78.621, 141.887),
        rotation: Quaternion.multiply(transform.rotation, rotationQuaternion),
        scale: Vector3.create(1, 1, 1),
        parent: this.gameController.mainInstance.s0_Puzlemachines_01
      })
    } else if (i === 2) {
      Transform.createOrReplace(this.gameController.mainInstance.s0_tube_03_01, {
        position: Vector3.create(99.79, 78.523, 143.532),
        rotation: Quaternion.multiply(transform.rotation, rotationQuaternion),
        scale: Vector3.create(1, 1, 1),
        parent: this.gameController.mainInstance.s0_Puzlemachines_01
      })
    }

    AudioManager.instance().playOnce('puzzle_interact', { volume: 0.5, parent: this.piece })
    if (this.currentState >= pieceState.length) {
      this.currentState = 0
    }
    if (this.currentState == this.correctState)
      AudioManager.instance().playOnce('puzzle_all_connect', { volume: 0.8, parent: this.piece })
    return this.checkState()
  }

  setState(_state: number) {
    this.currentState = _state
    this.checkState()
  }

  getEntity() {
    return this.piece
  }

  /**
   * If the current state of the puzzle is the same as the correct state, then turn off the cables
   * that are off and turn on the cables that are on. If the current state of the puzzle is not the
   * same as the correct state, then turn on the cables that are off and turn off the cables that are
   * on.
   */
  checkState() {
    if (this.currentState == this.correctState) {
      Transform.getMutable(this.puzzle_cables_on).scale = Vector3.create(1, 1, 1)
      Transform.getMutable(this.puzzle_cables_off).scale = Vector3.create(0, 0, 0)
      Transform.getMutable(this.tubeON).scale = Vector3.create(1, 1, 1)
      Transform.getMutable(this.tubeOFF).scale = Vector3.create(0, 0, 0)
      this.pieceTargeter.showArrow(false)
      return true
    } else {
      Transform.getMutable(this.puzzle_cables_off).scale = Vector3.create(1, 1, 1)
      Transform.getMutable(this.tubeOFF).scale = Vector3.create(1, 1, 1)
      Transform.getMutable(this.puzzle_cables_on).scale = Vector3.create(0, 0, 0)
      Transform.getMutable(this.tubeON).scale = Vector3.create(0, 0, 0)
      this.pieceTargeter.showArrow(true)
      return false
    }
  }
}
