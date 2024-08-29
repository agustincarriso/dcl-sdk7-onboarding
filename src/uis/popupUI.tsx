import { engine, UiCanvasInformation } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import { Label, ReactEcs, UiEntity } from '@dcl/sdk/react-ecs'
import { UIController } from '../controllers/uiController'

const lightGray = Color4.create(128 / 255, 128 / 255, 128 / 255, 0.2)
export enum POPUP_STATE {
  OneButton,
  TwoButtons,
  Tasks
}
export class Popup {
  backgroundBig: string = 'assets/ui/UI_Pop_Up_Base.png'
  isVisible: boolean = true
  titleBig: string = '<b>Getting started!</b>'
  headerText1: string = 'Objectives'
  uiController: UIController
  constructor(uiController: UIController) {
    this.uiController = uiController
  }
  popupUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'row',
          width: canvasInfo.width * 0.2,
          height: canvasInfo.height * 0.5,
          justifyContent: 'flex-end',
          positionType: 'absolute',
          position: { top: '20%', left: '40%' },
          display: this.isVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          texture: { src: this.backgroundBig }
        }}
      >
        {/* Text UI */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '30%', top: '7%' }
          }}
          value={this.titleBig}
          textAlign="middle-left"
          fontSize={canvasInfo.height * 0.02}
          font="sans-serif"
          color={Color4.Black()}
        />
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.3,
            height: '0.5%',
            position: { top: '16%', left: '15%' }
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.backgroundBig },
            color: lightGray
          }}
        ></UiEntity>
        {/* Text UI */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '38%', top: '18%' }
          }}
          value={this.headerText1}
          textAlign="middle-center"
          fontSize={canvasInfo.height * 0.02}
          font="sans-serif"
          color={Color4.Gray()}
        />
      </UiEntity>
    )
  }
}
