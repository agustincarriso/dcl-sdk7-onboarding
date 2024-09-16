import { engine, UiCanvasInformation } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import { Label, PositionUnit, ReactEcs, UiEntity } from '@dcl/sdk/react-ecs'
import { getTaskTexts, Objectives } from '../jsonData/tasksTexts'
import { UIController } from '../controllers/uiController'

export enum TaskType {
  Multiple = 0,
  Simple = 1
}
type TaskData = {
  text: string
  status: boolean
}
const TASKINFO: TaskData[] = [
  {
    text: 'Help Bezier with the moves.',
    status: false
  },
  {
    text: 'Help Mat with the meshes.',
    status: false
  },
  {
    text: 'Help Kit with the connection.',
    status: false
  }
]
export class WidgetTasks {
  isVisible: boolean = false
  //Simple Task
  uiController: UIController
  simpleContainer: Color4 = Color4.create(0, 0, 0, 0.5)
  simpleContainerVisible: boolean = false
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
  marginTop: PositionUnit = '0%'
  // MultiTasks
  multiContainer: string = 'assets/ui/UI_Tasks_Base_P.png'
  multiContainerVisible: boolean = false
  checkImageVisible1: boolean = false
  checkImageVisible2: boolean = false
  checkImageVisible3: boolean = false
  checkBoxImageVisible1: boolean = false
  checkBoxImageVisible2: boolean = false
  checkBoxImageVisible3: boolean = false
  title: string = 'Explore the island'
  task1: string = 'Help Bezier with the moves.'
  task2: string = 'Help Mat with the meshes.'
  task3: string = 'Help Kit with the connection.'
  constructor(uiController: UIController) {
    this.uiController = uiController
    this.currentTask = {
      text: { en: '' },
      missionInfo: { en: '' },
      fontSize: 0,
      vAlign: '',
      completed: false
    }
    this.setText(0, 0)
  }
  setMarginPositions() {
    console.log('margin positions' + this.simpleContainerVisible + this, this.multiContainerVisible)
    if (this.simpleContainerVisible === true && this.multiContainerVisible === true) {
      this.marginTop = '0%'
    } else {
      this.marginTop = '25%'
    }
  }
  setText(taskId: number, dialogId: number) {
    this.currentTask = getTaskTexts(taskId, dialogId)
    this.textUI = this.currentTask?.text?.en
    this.infoUI = this.currentTask?.missionInfo?.en
  }
  showTasks(visible: boolean, type: TaskType) {
    this.isVisible = true
    if (type === TaskType.Simple) {
      this.simpleContainerVisible = visible
      this.checkBoxImageVisible = visible
      this.textUIVisible = visible
      this.infoUIVisible = visible
      this.checkImageVisible = false
    }
    if (type === TaskType.Multiple) {
      this.multiContainerVisible = visible
      this.checkBoxImageVisible1 = visible
      this.checkBoxImageVisible2 = visible
      this.checkBoxImageVisible3 = visible
      this.checkImageVisible1 = false
      this.checkImageVisible2 = false
      this.checkImageVisible3 = false
    }
    this.setMarginPositions()
  }
  showTick(visible: boolean, index: number) {
    switch (index) {
      case 0:
        this.checkImageVisible = visible
        break
      case 1:
        this.checkImageVisible1 = visible
        break
      case 2:
        this.checkImageVisible2 = visible
        break
      case 3:
        this.checkImageVisible3 = visible
        break
    }
  }
  widgetTask(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'column',
          width: canvasInfo.height * 0.4,
          height: canvasInfo.height,
          justifyContent: 'flex-start',
          positionType: 'absolute',
          position: { top: '0%', right: '0%' },
          display: this.isVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        {/* Multi Task Container */}
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: '95%',
            height: canvasInfo.height * 0.19,
            justifyContent: 'flex-end',
            positionType: 'relative',
            position: { top: '0%', right: '0%' },
            margin: { bottom: '3%', top: '25%', right: '5%' },
            display: this.multiContainerVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.multiContainer },
            color: Color4.create(0, 0, 0, 0.5)
          }}
        >
          {/* Title*/}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '3%', top: '6.5%' }
            }}
            value={'<b>' + `${this.title}` + '</b>'}
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          {/* task 1 */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '13%', top: '29%' }
            }}
            value={this.task1}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          {/* checkBoxImage 1 */}
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.03,
              height: canvasInfo.height * 0.03,
              position: { top: '31%', left: '5%' },
              display: this.checkBoxImageVisible1 ? 'flex' : 'none'
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.checkBoxImage }
            }}
          >
            {/* checkBox tick 1*/}
            <UiEntity
              uiTransform={{
                positionType: 'absolute',
                width: '100%',
                height: '100%',
                display: this.checkImageVisible1 ? 'flex' : 'none'
              }}
              uiBackground={{
                textureMode: 'stretch',
                texture: { src: this.checkImage }
              }}
            ></UiEntity>
          </UiEntity>
          {/* Task 2 */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '13%', top: '49%' }
            }}
            value={this.task2}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          {/* checkBoxImage 2 */}
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.03,
              height: canvasInfo.height * 0.03,
              position: { top: '52%', left: '5%' },
              display: this.checkBoxImageVisible2 ? 'flex' : 'none'
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.checkBoxImage }
            }}
          >
            {/* checkBox tick 2*/}
            <UiEntity
              uiTransform={{
                positionType: 'absolute',
                width: '100%',
                height: '100%',
                display: this.checkImageVisible2 ? 'flex' : 'none'
              }}
              uiBackground={{
                textureMode: 'stretch',
                texture: { src: this.checkImage }
              }}
            ></UiEntity>
          </UiEntity>
          {/* Task 3 */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '13%', top: '69%' }
            }}
            value={this.task3}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.02}
            font="sans-serif"
            color={Color4.White()}
          />
          {/* checkBoxImage 3 */}
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.03,
              height: canvasInfo.height * 0.03,
              position: { top: '72%', left: '5%' },
              display: this.checkBoxImageVisible3 ? 'flex' : 'none'
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.checkBoxImage }
            }}
          >
            {/* checkBox tick 3*/}
            <UiEntity
              uiTransform={{
                positionType: 'absolute',
                width: '100%',
                height: '100%',
                display: this.checkImageVisible3 ? 'flex' : 'none'
              }}
              uiBackground={{
                textureMode: 'stretch',
                texture: { src: this.checkImage }
              }}
            ></UiEntity>
          </UiEntity>
        </UiEntity>
        {/* Simple Task*/}
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: '95%',
            height: canvasInfo.height * 0.118,
            justifyContent: 'flex-end',
            positionType: 'relative',
            position: { top: '0%', right: '0%' },
            margin: { bottom: '0%', top: this.marginTop, right: '5%' },
            display: this.simpleContainerVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: 'assets/ui/UI_Tasks_Base_P.png' },
            color: this.simpleContainer
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { left: '3%', top: '6.5%' }
            }}
            value={'<b>' + `${this.textUI}` + '</b>'}
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
            textWrap="nowrap"
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
            {/* checkBoxImage Tick */}
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
      </UiEntity>
    )
  }
}
