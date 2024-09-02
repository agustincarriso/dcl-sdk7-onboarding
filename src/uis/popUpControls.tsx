import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs'
import { UIController } from '../controllers/uiController'

export class PopUpControls {
  uiController: UIController
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
  constructor(uiController: UIController) {
    this.uiController = uiController
  }
  spaceUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'row',
          width: canvasInfo.width * 0.22,
          height: canvasInfo.height * 0.13,
          justifyContent: 'flex-end',
          positionType: 'absolute',
          position: { bottom: '1%', right: '35%' },
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
            position: { right: '22%', top: '35%' }
          }}
          value={this.spaceText}
          fontSize={canvasInfo.height * 0.02}
          font="sans-serif"
          color={Color4.White()}
        />
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.height * 0.17,
            height: canvasInfo.height * 0.07,
            position: { top: '23%', left: '15%' }
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.spaceImage }
          }}
        ></UiEntity>
      </UiEntity>
    )
  }
  emoteUI(): ReactEcs.JSX.Element {
    const canvasInfo = UiCanvasInformation.get(engine.RootEntity)
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'row',
          width: canvasInfo.width * 0.22,
          height: canvasInfo.height * 0.13,
          justifyContent: 'flex-end',
          positionType: 'absolute',
          position: { bottom: '1%', right: '35%' },
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
          fontSize={canvasInfo.width * 0.01}
          font="sans-serif"
          color={Color4.White()}
        />
        {/* Text UI */}
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { right: '6%', top: '28%' },
            margin: { left: '1%' }
          }}
          value={this.emoteText}
          fontSize={canvasInfo.width * 0.01}
          font="sans-serif"
          color={Color4.White()}
        />
        <UiEntity
          uiTransform={{
            positionType: 'absolute',
            width: canvasInfo.width * 0.05,
            height: '100%',
            position: { top: '0%', left: '22%' },
            margin: { left: '0%', right: '0%' }
          }}
          uiBackground={{
            textureMode: 'stretch',
            color: Color4.create(0,0,0,0)
          }}
        >
          <UiEntity
            uiTransform={{
              positionType: 'absolute',
              width: '90%',
              height: '80%',
              position: { top: '10%', left: '5%' },
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
}
