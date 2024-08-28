import { engine, UiCanvasInformation } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import { Label, ReactEcs, UiEntity } from '@dcl/sdk/react-ecs'
import { GameController } from '../controllers/gameController'

export enum TaskType {
  Multiple = 0,
  Simple = 1
}
export class WidgetTasksBox {
  auxcontainer: Color4 = Color4.create(0, 0, 0, 0.5)
  checkImage: string = 'assets/ui/UI_Tasks_Tick.png'
  checkBoxImage: string = 'assets/ui/UI_Tasks_Box.png'
  taskId: number = 0
  textUI: string = ''
  infoUI: string = ''
  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
  }
  setText() {}
  setNextText() {}
  showTick() {}
  updadeMissionInfo() {}
  hideTasks() {}
  showTasks() {}
  setOtherTask(taskId: number) {}
  setOtherTaskDelay(taskId: number, time: number) {}
  resetTasks(questId: number) {}
  setVisibility(visibility: boolean) {}
  setPaddingY(padding: string) {}
  setPaddingX(padding: string) {}
  initialize(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'row',
          width: canvasInfo.width * 0.19,
          height: canvasInfo.height * 0.118,
          justifyContent: 'flex-end',
          positionType: 'absolute',
          position: { top: '14%', right: '2.5%' } 
        }}
        uiBackground={{
          textureMode: 'stretch',
          texture: { src: 'assets/ui/UI_Tasks_Base_P.png' },
          color: this.auxcontainer
        }}
      >
        {/* Level */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '3%', top: '6.5%' },
          }}
          value={'<b>Talk with the robot</b>'}
          fontSize={canvasInfo.height * 0.02} 
          font="sans-serif"
          color={Color4.White()}
        />
        {/* Level */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '13%', top: '35%' },
          }}
          value={'Get close to the robot. Click to <br>interact with it'}
          textAlign="middle-left"
          fontSize={canvasInfo.height * 0.02}
          font="sans-serif"
          color={Color4.White()}
        />
        {/* checkBoxImage */}
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.03,
            height: canvasInfo.height * 0.03,
            position: { top: '40%', left: '5%' }
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.checkBoxImage }
          }}
        >
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '100%',
              height: '100%'
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.checkImage }
            }}
          ></UiEntity>
        </UiEntity>
      </UiEntity>
    )
  }
}
