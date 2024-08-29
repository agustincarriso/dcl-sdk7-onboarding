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
  headerText2: string = '<b>Help Mat with the meshes</b>'
  headerText3: string = '<b>Help Kit with the connection</b>'
  headerText4: string = '<b>Show Bezier your moves</b>'
  buttonRightImage: string = 'assets/ui/UI_button_red_version_2.png'
  buttonRightText: string = '<b>OK</b>'
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
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.3,
            height: canvasInfo.height * 0.05,
            position: { top: '32%', left: '15%' }
          }}
          uiBackground={{
            textureMode: 'center',
            texture: { src: this.backgroundBig },
            color: lightGray
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'relative',
              margin: { left: '11%', top: '2%', bottom: '2%', right: '10%' }
            }}
            value={this.headerText4}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.016}
            font="sans-serif"
            color={Color4.Black()}
          />
        </UiEntity>
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.3,
            height: canvasInfo.height * 0.05,
            position: { top: '44%', left: '15%' }
          }}
          uiBackground={{
            textureMode: 'center',
            texture: { src: this.backgroundBig },
            color: lightGray
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'relative',
              margin: { left: '11%', top: '2%', bottom: '2%', right: '10%' }
            }}
            value={this.headerText2}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.016}
            font="sans-serif"
            color={Color4.Black()}
          />
        </UiEntity>
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.3,
            height: canvasInfo.height * 0.05,
            position: { top: '56%', left: '15%' }
          }}
          uiBackground={{
            textureMode: 'center',
            texture: { src: this.backgroundBig },
            color: lightGray
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'relative',
              margin: { left: '11%', top: '2%', bottom: '2%', right: '10%' }
            }}
            value={this.headerText4}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.016}
            font="sans-serif"
            color={Color4.Black()}
          />
        </UiEntity>
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.14,
            height: canvasInfo.height * 0.06,
            position: { bottom: '13%', left: '35%' }
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.buttonRightImage }
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: {bottom: '20%', left: '37%', top:'20%'},
            }}
            value={this.buttonRightText}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.018}
            font="sans-serif"
            color={Color4.White()}
          />
        </UiEntity>
      </UiEntity>
    )
  }
}
