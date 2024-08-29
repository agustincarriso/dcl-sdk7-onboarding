import { engine, PointerLock, UiCanvasInformation } from '@dcl/sdk/ecs'
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
  backgroundBlack: string = 'assets/ui/UI_Tasks_Base_P.png'
  isVisible: boolean = false
  titleBig: string = '<b>Getting started!</b>'
  headerText1: string = '<b>Objectives</b>'
  headerText2: string = '<b>Help Mat with the meshes</b>'
  headerText3: string = '<b>Help Kit with the connection</b>'
  headerText4: string = '<b>Show Bezier your moves</b>'
  buttonRightImage: string = 'assets/ui/UI_button_red_version_2.png'
  buttonRightText: string = '<b>OK</b>'
  arrowAttention: string = 'assets/ui/UI_Arrow.png'
  takecontrol2Value: string = 'Press'
  ESCLeft: string = 'assets/ui/UI_EscKey.png'
  takecontrol: string = 'or the right-click mouse \nbutton to take control'
  mouseRigth: string = 'assets/ui/UI_UnlockMouseRightBtn.png'
  takecontrolCameraImageText: string = 'Click to take control \nof the camera'
  takecontrolCameraImage: string = 'assets/ui/UI_Control.png'
  takeControlCameraEscVisible: boolean = false
  takeControlCameraVisible: boolean = false
  uiController: UIController
  constructor(uiController: UIController) {
    this.uiController = uiController
  }
  popupUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'column',
          width: canvasInfo.width * 0.25,
          height: canvasInfo.height,
          justifyContent: 'flex-end',
          positionType: 'absolute',
          position: { top: '0%', left: '40%' },
          display: this.isVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.width * 0.25,
            height: canvasInfo.height * 0.58,
            // justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { top: '15%', left: '0%' },
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
              position: { left: '0%', top: '7%' },
              margin: { left: '30%', right: '30%' }
            }}
            value={this.titleBig}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.024}
            font="sans-serif"
            color={Color4.Black()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: '0.3%',
              position: { top: '16%', left: '13%' }
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
              position: { left: '0%', top: '18%' },
              margin: { left: '37%', right: '37%' }
            }}
            value={this.headerText1}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.022}
            font="sans-serif"
            color={Color4.Gray()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: canvasInfo.height * 0.06,
              position: { top: '32%', left: '0%' },
              margin: { left: '13%', right: '13%' }
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
                margin: { left: '19%', top: '2%', bottom: '2%', right: '19%' }
              }}
              value={this.headerText4}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.Black()}
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: canvasInfo.height * 0.06,
              position: { top: '44%', left: '0%' },
              margin: { left: '13%', right: '13%' }
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
                positionType: 'absolute',
                margin: { left: '18%', top: '2%', bottom: '2%', right: '18%' }
              }}
              value={this.headerText2}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.Black()}
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: canvasInfo.height * 0.06,
              position: { top: '56%', left: '0%' },
              margin: { left: '13%', right: '13%' }
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
                positionType: 'absolute',
                margin: { left: '18%', top: '2%', bottom: '2%', right: '18%' }
              }}
              value={this.headerText3}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.Black()}
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.16,
              height: canvasInfo.height * 0.08,
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
                position: { bottom: '20%', left: '0%', top: '20%' },
                margin: { left: '38%', right: '38%' }
              }}
              value={this.buttonRightText}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.White()}
            />
          </UiEntity>
        </UiEntity>
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: '90%',
            height: canvasInfo.height * 0.114,
            position: { bottom: '10%', left: '5%' },
            display: this.takeControlCameraEscVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.backgroundBlack },
            color: Color4.create(0, 0, 0, 0.5)
          }}
        >
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { bottom: '20%', left: '35%', top: '20%' }
            }}
            value={this.takecontrol}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.018}
            font="sans-serif"
            color={Color4.White()}
          />
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { bottom: '20%', left: '5%', top: '20%' }
            }}
            value={this.takecontrol2Value}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.018}
            font="sans-serif"
            color={Color4.White()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.045,
              height: canvasInfo.height * 0.035,
              position: { bottom: '30%', left: '20%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.ESCLeft }
            }}
          ></UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.05,
              height: canvasInfo.height * 0.05,
              position: { bottom: '24%', right: '4%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.mouseRigth }
            }}
          ></UiEntity>
        </UiEntity>
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.045,
            height: canvasInfo.height * 0.061,
            position: { bottom: '20%', left: '45%' },
            display: this.takeControlCameraEscVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.arrowAttention }
          }}
        ></UiEntity>
      </UiEntity>
    )
  }
  controlUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'row',
          width: canvasInfo.width * 0.22,
          height: canvasInfo.height * 0.13,
          justifyContent: 'flex-end',
          positionType: 'absolute',
          position: { bottom: '1%', right: '36.5%' },
          display: this.takeControlCameraVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          texture: { src: this.backgroundBlack },
          color: Color4.create(0, 0, 0, 0.5)
        }}
      >
        {/* Text UI */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { right: '22%', top: '35%' }
          }}
          value={this.takecontrolCameraImageText}
          fontSize={canvasInfo.height * 0.02}
          font="sans-serif"
          color={Color4.White()}
        />
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: '50%',
            height: canvasInfo.height * 0.1,
            position: { top: '20%', left: '10%' }
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.takecontrolCameraImage }
          }}
        ></UiEntity>
      </UiEntity>
    )
  }
  switchControl(){
    PointerLock.onChange(engine.CameraEntity, (pointerLock) => {
      if (!pointerLock) return
      console.log('Pointer lock changed', pointerLock.isPointerLocked)
      if(pointerLock.isPointerLocked){
        this.takeControlCameraEscVisible = true
        this.takeControlCameraVisible = false
      }else{
        this.takeControlCameraEscVisible = false
        this.takeControlCameraVisible = true
      }
    })
  }
}
