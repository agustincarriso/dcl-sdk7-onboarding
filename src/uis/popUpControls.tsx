import { CameraMode, CameraType, Transform, UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs'
import { UIController } from '../controllers/uiController'

export class PopUpControls {
  uiController: UIController
  currentCamera: CameraType | null = null
  freezeCamera: boolean = false
  endPuzzle: boolean = false
  //Jump
  spaceContainer: string = 'assets/ui/UI_Tasks_Base_P.png'
  spaceContainerVisible: boolean = false
  spaceImage: string = 'assets/ui/UI_Space.png'
  spaceText: string = '<b>Jump</b>'
  //Emote
  emoteContainerVisible: boolean = false
  emoteText2: string = '<b>Press</b>'
  emoteImage: string = 'assets/ui/UI_B.png'
  emoteText: string = '<b>to open emote menu\nand select a move</b>'
  //Puzzle V
  puzzleContainerVisible: boolean = false
  puzzleImage: string = 'assets/ui/UI_V.png'
  puzzleText: string = '<b>Toggle camera to get\na closer look</b>'
  puzzleConnectCablesVisible: boolean = false
  puzzleConnectCablesText: string = '<b>Connect the cables</b>'
  constructor(uiController: UIController) {
    this.uiController = uiController
  }
  spaceUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          width: canvasInfo.width,
          height: '15%',
          position: { bottom: '0%', left: '0%' }
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.height * 0.42,
            height: canvasInfo.height * 0.13,
            justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { bottom: '2%', left: '40%' },
            display: this.spaceContainerVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.spaceContainer },
            color: Color4.create(0, 0, 0, 0.5)
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { right: '20%', top: '35%' }
            }}
            value={this.spaceText}
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '40%',
              height: '50%',
              position: { top: '25%', left: '15%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.spaceImage }
            }}
          ></UiEntity>
        </UiEntity>
      </UiEntity>
    )
  }
  emoteUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          width: canvasInfo.width,
          height: '15%',
          position: { bottom: '0%', left: '0%' }
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.height * 0.46,
            height: canvasInfo.height * 0.13,
            justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { bottom: '2%', left: '40%' },
            display: this.emoteContainerVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.spaceContainer },
            color: Color4.create(0, 0, 0, 0.5)
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '5%', top: '35%' }
            }}
            value={this.emoteText2}
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { right: '6%', top: '28%' }
            }}
            value={this.emoteText}
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '25%',
              height: '80%',
              position: { top: '10%', left: '19%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.emoteImage }
            }}
          ></UiEntity>
        </UiEntity>
      </UiEntity>
    )
  }
  puzzleUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          width: canvasInfo.width,
          height: '15%',
          position: { bottom: '0%', left: '0%' },
          display: this.puzzleContainerVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.height * 0.4,
            height: canvasInfo.height * 0.13,
            justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { bottom: '2%', left: '40%' },
            display: this.puzzleContainerVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.spaceContainer },
            color: Color4.create(0, 0, 0, 0.5)
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { right: '7%', top: '25%' }
            }}
            value={this.puzzleText}
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '30%',
              height: '80%',
              position: { top: '10%', left: '5%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.puzzleImage }
            }}
          ></UiEntity>
        </UiEntity>
      </UiEntity>
    )
  }
  puzzleUIConnectCables(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          width: canvasInfo.width,
          height: '15%',
          position: { bottom: '0%', left: '0%' },
          display: this.puzzleConnectCablesVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.height * 0.4,
            height: canvasInfo.height * 0.13,
            justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { bottom: '2%', left: '40%' },
            display: this.puzzleConnectCablesVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.spaceContainer },
            color: Color4.create(0, 0, 0, 0.5)
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '25%', top: '36%' }
            }}
            value={this.puzzleConnectCablesText}
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
        </UiEntity>
      </UiEntity>
    )
  }
  showPuzzlesUis() {
    Transform.onChange(engine.CameraEntity, () => {
      let cameraEntity = CameraMode.get(engine.CameraEntity)
      if (this.endPuzzle === true) {
        this.puzzleConnectCablesVisible = false
        this.puzzleContainerVisible = false
        return
      }
      if (this.freezeCamera === true) {
        this.puzzleConnectCablesVisible = true
        this.puzzleContainerVisible = false
        return
      }
      if (cameraEntity.mode == CameraType.CT_THIRD_PERSON) {
        this.puzzleConnectCablesVisible = false
        this.puzzleContainerVisible = true
      } else if (cameraEntity.mode == CameraType.CT_FIRST_PERSON) {
        this.freezeCamera = true
        this.puzzleConnectCablesVisible = true
        this.puzzleContainerVisible = false
      }
    })
  }
}
