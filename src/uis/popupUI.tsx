import { engine, PointerLock, UiCanvasInformation } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import { Label, PositionUnit, ReactEcs, UiEntity } from '@dcl/sdk/react-ecs'
import { UIController } from '../controllers/uiController'
import { openExternalUrl } from '~system/RestrictedActions'

const lightGray = Color4.create(128 / 255, 128 / 255, 128 / 255, 0.2)
const transparentLightGray = Color4.create(128 / 255, 128 / 255, 128 / 255, 0.2)

export enum POPUP_STATE {
  OneButton = 0,
  TwoButtons = 1,
  Tasks = 2,
  Vest = 3
}
export class Popup {
  uiController: UIController
  backgroundBig: string = 'assets/ui/UI_Pop_Up_Base.png'
  backgroundBlack: string = 'assets/ui/UI_Tasks_Base_P.png'
  takeControlCameraEscVisible: boolean = false
  takeControlCameraVisible: boolean = false
  ESCLeft: string = 'assets/ui/UI_EscKey.png'
  takecontrol: string = 'or the right-click mouse \nbutton to take control'
  takecontrol2Value: string = 'Press'
  buttonRightImage: string = 'assets/ui/UI_button_red_version_2.png'
  arrowAttention: string = 'assets/ui/UI_Arrow.png'
  takecontrolCameraImageText: string = 'Click to take control \nof the camera'
  takecontrolCameraImage: string = 'assets/ui/UI_Control.png'
  mouseRigth: string = 'assets/ui/UI_UnlockMouseRightBtn.png'
  currentButton: number = 0
  closeButton: string = 'assets/ui/close_button.png'
  // Tobor
  isVisible: boolean = false
  titleBig: string = '<b>Getting started!</b>'
  headerText1: string = '<b>Objectives</b>'
  headerText2: string = '<b>Help Mat with the meshes</b>'
  headerText3: string = '<b>Help Kit with the connection</b>'
  headerText4: string = '<b>Show Bezier your moves</b>'
  buttonRightText: string = '<b>OK</b>'
  // Bezier
  emoteTitleBig = '<b>Congratulations!</b>'
  emoteVisible: boolean = false
  buttonLeftVisible: boolean = false
  emoteHeaderText1: string = '<b>YOU GOT A NEW EMOTE</b>'
  emoteImage: string = 'assets/ui/emote_icon.png'
  imageText: string = "<b>Bezier's dance</b>"
  buttonLeft: string = '<b>Dismiss</b>'
  emoteButtonRightText: string = '<b>Get a Wallet</b>'
  emoteButtonRightMargin: PositionUnit = '20%'
  disclaimText: string = "<b>You currently cannot claim this prize as \nyou don't have a connected wallet</b>"
  // Mat
  matTitleBig = '<b>Congratulations!</b>'
  matVisible: boolean = false
  matHeaderText1: string = '<b>YOU GOT A NEW WEARABLE</b>'
  matImage: string = 'assets/ui/Upperbody.png'
  matImageText: string = "<b>Mat's Vest</b>"
  matButtonRightText: string = '<b>Yay!</b>'
  matButtonLeftText: string = '<b>Close</b>'
  scaleFactor: number
  constructor(uiController: UIController) {
    this.uiController = uiController
    this.scaleFactor = 1

    engine.addSystem((dt) => {
      const uiCanvasInfo = UiCanvasInformation.getOrNull(engine.RootEntity)
      if (!uiCanvasInfo) return
      const newScaleFactor = Math.min(uiCanvasInfo.width / 1920, uiCanvasInfo.height / 1080)
      if (newScaleFactor !== this.scaleFactor) {
        this.scaleFactor = newScaleFactor
      }
    })
  }
  popupUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    // console.log(canvasInfo.height, '----->>> here')
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'column',
          width: canvasInfo.height * 0.46 * this.scaleFactor,
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
            width: '100%',
            height: 905 * 0.58 * this.scaleFactor,
            // justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { top: '20%', left: '0%' },
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
            fontSize={905 * 0.024 * this.scaleFactor}
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
            fontSize={905 * 0.022 * this.scaleFactor}
            font="sans-serif"
            color={Color4.Gray()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: 905 * 0.06 * this.scaleFactor,
              position: { top: '32%', left: '0%' },
              margin: { left: '13%', right: '13%' }
            }}
            // uiBackground={{
            //   textureMode: 'center',
            //   texture: { src: this.backgroundBig },
            //   color: lightGray
            // }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'relative',
                margin: { left: '19%', top: '2%', bottom: '2%', right: '19%' }
              }}
              value={this.headerText4}
              textAlign="middle-center"
              fontSize={905 * 0.018 * this.scaleFactor}
              font="sans-serif"
              color={Color4.Black()}
              textWrap="nowrap"
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: 905 * 0.06 * this.scaleFactor,
              position: { top: '44%', left: '0%' },
              margin: { left: '13%', right: '13%' }
            }}
            // uiBackground={{
            //   textureMode: 'center',
            //   texture: { src: this.backgroundBig },
            //   color: lightGray
            // }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'relative',
                margin: { left: '18%', top: '2%', bottom: '2%', right: '18%' }
              }}
              value={this.headerText2}
              textAlign="middle-center"
              fontSize={905 * 0.018 * this.scaleFactor}
              font="sans-serif"
              color={Color4.Black()}
              textWrap="nowrap"
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '75%',
              height: 905 * 0.06 * this.scaleFactor,
              position: { top: '56%', left: '0%' },
              margin: { left: '13%', right: '13%' }
            }}
            // uiBackground={{
            //   textureMode: 'center',
            //   texture: { src: this.backgroundBig },
            //   color: lightGray
            // }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'relative',
                margin: { left: '18%', top: '2%', bottom: '2%', right: '18%' }
              }}
              value={this.headerText3}
              textAlign="middle-center"
              fontSize={905 * 0.018 * this.scaleFactor}
              font="sans-serif"
              color={Color4.Black()}
              textWrap="nowrap"
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.16 * this.scaleFactor,
              height: canvasInfo.height * 0.08 * this.scaleFactor,
              position: { bottom: '13%', left: '35%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.buttonRightImage }
            }}
            onMouseDown={() => {
              this.uiController.gameController.spawnIsland.onCloseRewardUI()
              this.hide(POPUP_STATE.Tasks)
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
              fontSize={905 * 0.018 * this.scaleFactor}
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
              position: { bottom: '20%', left: '33%', top: '20%' }
            }}
            value={this.takecontrol}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.017}
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
            fontSize={905 * 0.017 * this.scaleFactor}
            font="sans-serif"
            color={Color4.White()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.045,
              height: 905 * 0.035 * this.scaleFactor,
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
              height: 905 * 0.05 * this.scaleFactor,
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
            height: 905 * 0.061 * this.scaleFactor,
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

  popupUIEmote(): ReactEcs.JSX.Element {
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
          display: this.emoteVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.height * 0.48,
            height: canvasInfo.height * 0.58,
            // justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { top: '15%', left: '0%' },
            display: this.emoteVisible ? 'flex' : 'none'
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
              position: { left: '0%', top: '8%' },
              margin: { left: '30%', right: '30%' }
            }}
            value={this.emoteTitleBig}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.021}
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
              margin: { left: '24%', right: '24%' }
            }}
            value={this.emoteHeaderText1}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.019}
            font="sans-serif"
            color={Color4.Gray()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.12,
              height: canvasInfo.height * 0.12,
              position: { top: '27%', left: '0%' },
              margin: { left: '37.5%', right: '37.5%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.backgroundBig },
              color: lightGray
            }}
          >
            <UiEntity
              uiTransform={{
                positionType: 'absolute',
                width: '90%',
                height: '90%',
                position: { top: '0%', left: '0%' },
                margin: { left: '0%', right: '0%' }
              }}
              uiBackground={{
                textureMode: 'stretch',
                texture: { src: this.emoteImage }
              }}
            ></UiEntity>
          </UiEntity>
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { bottom: '18%', left: '0%', top: '20%' },
              margin: { left: '36.5%', right: '36.5%' }
            }}
            value={this.imageText}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.017}
            font="sans-serif"
            color={Color4.Black()}
          />
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { bottom: '0%', left: '0%', top: '20%' },
              margin: { left: '20%', right: '20%' }
            }}
            value={this.disclaimText}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.014}
            font="sans-serif"
            color={Color4.create(0, 0, 0, 0)}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.19,
              height: canvasInfo.height * 0.07,
              position: { bottom: '21%', left: '0%' },
              margin: { left: '30%', right: '30%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.buttonRightImage }
            }}
            onMouseDown={() => {
              if (this.currentButton === POPUP_STATE.TwoButtons) {
                this.hide(POPUP_STATE.TwoButtons)
                this.uiController.gameController.questEmote.onCloseRewardUI()
                openExternalUrl({ url: 'https://docs.decentraland.org/player/blockchain-integration/get-a-wallet/' })
              } else if (this.currentButton === POPUP_STATE.OneButton) {
                this.hide(POPUP_STATE.OneButton)
                this.uiController.gameController.questEmote.giveReward()
              }
            }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'absolute',
                position: { bottom: '20%', left: '0%', top: '20%' },
                margin: { left: this.emoteButtonRightMargin, right: this.emoteButtonRightMargin }
              }}
              value={this.emoteButtonRightText}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.White()}
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.19,
              height: canvasInfo.height * 0.07,
              position: { bottom: '10%', left: '0%' },
              margin: { left: '30%', right: '30%' },
              display: this.buttonLeftVisible ? 'flex' : 'none'
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.buttonRightImage },
              color: Color4.Black()
            }}
            onMouseDown={() => {
              if (POPUP_STATE.TwoButtons) {
                this.hide(POPUP_STATE.TwoButtons)
                this.uiController.gameController.questEmote.onCloseRewardUI()
              } else if (POPUP_STATE.OneButton) {
                this.hide(POPUP_STATE.OneButton)
              }
            }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'absolute',
                position: { bottom: '20%', left: '0%', top: '20%' },
                margin: { left: '34%', right: '34%' },
                display: this.buttonLeftVisible ? 'flex' : 'none'
              }}
              value={this.buttonLeft}
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
  popupUIVest(): ReactEcs.JSX.Element {
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
          display: this.matVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          textureMode: 'stretch',
          color: Color4.create(0, 0, 0, 0)
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: canvasInfo.height * 0.48,
            height: canvasInfo.height * 0.58,
            // justifyContent: 'flex-end',
            positionType: 'absolute',
            position: { top: '15%', left: '0%' },
            display: this.matVisible ? 'flex' : 'none'
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
              position: { left: '0%', top: '8%' },
              margin: { left: '30%', right: '30%' }
            }}
            value={this.matTitleBig}
            textAlign="middle-left"
            fontSize={canvasInfo.height * 0.021}
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
              position: { left: '20%', top: '18%' },
              margin: { left: '0%', right: '0%' }
            }}
            value={this.matHeaderText1}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.019}
            font="sans-serif"
            color={Color4.Gray()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.12,
              height: canvasInfo.height * 0.12,
              position: { top: '35%', left: '0%' },
              margin: { left: '37.5%', right: '37.5%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.backgroundBig },
              color: lightGray
            }}
          >
            <UiEntity
              uiTransform={{
                positionType: 'absolute',
                width: '90%',
                height: '90%',
                position: { top: '5%', left: '5%' },
                margin: { left: '0%', right: '0%' }
              }}
              uiBackground={{
                textureMode: 'stretch',
                texture: { src: this.matImage }
              }}
            ></UiEntity>
          </UiEntity>
          {/* Text UI */}
          <Label
            uiTransform={{
              positionType: 'absolute',
              position: { bottom: '0%', left: '0%', top: '20%' },
              margin: { left: '39.5%', right: '39.5%' }
            }}
            value={this.matImageText}
            textAlign="middle-center"
            fontSize={canvasInfo.height * 0.017}
            font="sans-serif"
            color={Color4.Black()}
          />
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.15,
              height: canvasInfo.height * 0.07,
              position: { bottom: '22%', left: '0%' },
              margin: { left: '35%', right: '35%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.buttonRightImage }
            }}
            onMouseDown={() => {
              this.hide(POPUP_STATE.Vest)
              this.uiController.gameController.questMaterial.giveReward()
            }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'absolute',
                position: { bottom: '20%', left: '0%', top: '20%' },
                margin: { left: '34%', right: '34%' }
              }}
              value={this.matButtonRightText}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.White()}
            />
          </UiEntity>
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: canvasInfo.height * 0.15,
              height: canvasInfo.height * 0.07,
              position: { bottom: '10%', left: '0%' },
              margin: { left: '35%', right: '35%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.buttonRightImage },
              color: Color4.Black()
            }}
            onMouseDown={() => {
              this.hide(POPUP_STATE.Vest)
              this.uiController.gameController.questMaterial.activatePilar()
              this.uiController.gameController.questMaterial.afterEndQuestClick()
            }}
          >
            {/* Text UI */}
            <Label
              uiTransform={{
                positionType: 'absolute',
                position: { bottom: '20%', left: '0%', top: '20%' },
                margin: { left: '30%', right: '30%' }
              }}
              value={this.matButtonLeftText}
              textAlign="middle-center"
              fontSize={canvasInfo.height * 0.018}
              font="sans-serif"
              color={Color4.White()}
            />
          </UiEntity>
        </UiEntity>
      </UiEntity>
    )
  }
  controlUI(): ReactEcs.JSX.Element {
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
            position: { bottom: '2%', left: '36.5%' },
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
              height: '80%',
              position: { top: '15%', left: '10%' }
            }}
            uiBackground={{
              textureMode: 'stretch',
              texture: { src: this.takecontrolCameraImage }
            }}
          ></UiEntity>
        </UiEntity>
      </UiEntity>
    )
  }
  onFocusScreen() {
    PointerLock.onChange(engine.CameraEntity, (pointerLock) => {
      if (!pointerLock) return
      if (this.isVisible === true || this.emoteVisible === true) {
        if (pointerLock.isPointerLocked === true) {
          this.takeControlCameraEscVisible = false
          this.takeControlCameraVisible = false
        } else {
          this.takeControlCameraEscVisible = false
          this.takeControlCameraVisible = false
        }
      }
    })
  }
  show(popUpState: POPUP_STATE) {
    console.log('show case' + popUpState)
    switch (popUpState) {
      case 0:
        this.currentButton = 0
        // this.onFocusScreen()
        this.emoteVisible = true
        this.emoteButtonRightText = '<b>CLAIM EMOTE<b>'
        this.emoteButtonRightMargin = '15%'
        this.disclaimText = ''
        this.buttonLeftVisible = true
        this.buttonLeft = '<b>Close<b>'
        break
      case 1:
        this.currentButton = 1
        // this.onFocusScreen()
        this.emoteButtonRightText = '<b>Get a Wallet</b>'
        this.buttonLeft = '<b>Dismiss<b>'
        this.emoteButtonRightMargin = '20%'
        this.emoteVisible = true
        this.buttonLeftVisible = true
        break
      case 2:
        // this.onFocusScreen()
        this.isVisible = true
        break
      case 3:
        this.matVisible = true
        break
    }
  }
  hide(popUpState: POPUP_STATE) {
    console.log('show case' + popUpState)
    switch (popUpState) {
      case 0:
        this.emoteVisible = false
        this.buttonLeftVisible = false
        this.takeControlCameraEscVisible = false
        this.takeControlCameraVisible = false
        break
      case 1:
        this.emoteVisible = false
        this.takeControlCameraVisible = false
        this.buttonLeftVisible = false
        this.takeControlCameraEscVisible = false
        this.takeControlCameraVisible = false
        break
      case 2:
        this.isVisible = false
        this.takeControlCameraEscVisible = false
        this.takeControlCameraVisible = false
        break
      case 3:
        this.matVisible = false
        break
    }
  }
}
