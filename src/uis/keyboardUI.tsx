import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs'
import { GameController } from '../controllers/gameController'
import { Color4 } from '@dcl/sdk/math'

export class KeyBoardUI {
  image: string = 'assets/ui/UI_Keyboard.png'
  IMAGE_SCALE: number = 0.7
  isVisible: boolean = false
  pressanykey: string = 'Press left click to Continue...'
  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
  }
  mainUi(): ReactEcs.JSX.Element {
    return (
      <UiEntity
        uiTransform={{
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          positionType: 'absolute',
          position: { top: '0%', right: '0%' },
          display: this.isVisible ? 'flex' : 'none'
        }}
        uiBackground={{
          color: Color4.Black()
        }}
      >
        <UiEntity
          uiTransform={{
            flexDirection: 'row',
            width: '70%',
            height: '70%',
            justifyContent: 'center',
            positionType: 'absolute',
            position: { top: '17%', right: '12%' },
            display: this.isVisible ? 'flex' : 'none'
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.image }
          }}
          onMouseDown={() => {
            this.isVisible = false
          }}
        ></UiEntity>
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '40%', bottom: '8%' }
          }}
          value={this.pressanykey}
          fontSize={30}
          font="sans-serif"
          color={Color4.White()}
          textAlign="bottom-center"
        />
      </UiEntity>
    )
  }
}
