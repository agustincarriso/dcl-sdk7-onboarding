import { engine, UiCanvasInformation } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import { Label, ReactEcs, UiEntity } from '@dcl/sdk/react-ecs'
import { GameController } from '../controllers/gameController'
import { getTaskTexts, Objectives } from '../jsonData/tasksTexts'
import { UIController } from '../controllers/uiController'

export enum TaskType {
  Multiple = 0,
  Simple = 1
}
export class WidgetTasksBox {
  auxcontainer: Color4 = Color4.create(0, 0, 0, 0.5)
  auxcontainerVisible: boolean = false
  checkImage: string = 'assets/ui/UI_Tasks_Tick.png'
  checkImageVisible: boolean = false
  checkBoxImage: string = 'assets/ui/UI_Tasks_Box.png'
  checkBoxImageVisible: boolean = false
  taskId: number = 0
  textUI: string = ''
  textUIVisible: boolean = false
  infoUI: string = ''
  infoUIVisible: boolean = false
  currentTask: Objectives
  uiController: UIController
  constructor(uiController: UIController) {
    this.uiController = uiController
    this.currentTask = {
      text: { en: '' },
      missionInfo: { en: '' },
      fontSize: 0,
      vAlign: '',
      completed: false
    }
  }
  setText(taskId: number, dialogId: number) {
    this.currentTask = getTaskTexts(taskId, dialogId)
    this.textUI = this.currentTask?.text?.en
    this.infoUI = this.currentTask?.missionInfo?.en
  }
  showTasks(visible: boolean) {
    this.auxcontainerVisible = visible
    this.checkBoxImageVisible =visible 
    this.textUIVisible = visible
    this.infoUIVisible = visible
    this.checkImageVisible = false
  }
  showTick(visible = true) {
    if (visible) {
      this.checkImageVisible = true
    }
  }
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
          position: { top: '14%', right: '2.5%' },
          display: this.auxcontainerVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          texture: { src: 'assets/ui/UI_Tasks_Base_P.png' },
          color: this.auxcontainer
        }}
      >
        {/* Text UI */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '3%', top: '6.5%' }
          }}
          value={"<b>"+`${this.textUI}`+"</b>"}
          fontSize={canvasInfo.height * 0.02}
          font="sans-serif"
          color={Color4.White()}
        />
        {/* Info UI */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '13%', top: '35%' }
          }}
          value={this.infoUI}
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
            position: { top: '40%', left: '5%' },
            display: this.checkBoxImageVisible ? 'flex' : 'none'
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
              height: '100%',
              display: this.checkImageVisible ? 'flex' : 'none'
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
