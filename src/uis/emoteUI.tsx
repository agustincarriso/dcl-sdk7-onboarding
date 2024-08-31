import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs'
import { UIController } from '../controllers/uiController'

export class EmoteUI {
  spaceContainer: string = 'assets/ui/UI_Tasks_Base_P.png'
  spaceContainerVisible: boolean = false
  spaceImage: string = 'assets/ui/UI_B.png'
  spaceText: string = '<b>Press B to dance</b>'
  uiController: UIController
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
            width: canvasInfo.height * 0.08,
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
}
