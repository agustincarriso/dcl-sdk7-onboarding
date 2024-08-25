import { UiCanvasInformation, engine } from '@dcl/sdk/ecs';
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs';
import { GameController } from '../controllers/gameController';
import { Color4 } from '@dcl/sdk/math';
import * as utils from '@dcl-sdk/utils'
export class KeyBoardUI {
  image: string = 'assets/ui/UI_Keyboard.png';
  IMAGE_SCALE: number = 0.7;
  isVisible: boolean = false;
  pressanykey: string = 'Press left click to Continue...';
  gameController: GameController;
  currentBackgroundColor: Color4 = Color4.Black(); // Estado inicial del color

  constructor(gameController: GameController) {
    this.gameController = gameController;
  }

  // Función para iniciar el efecto de fade out cambiando los valores RGB
  startFadeOut() {
    let fadeInterval = 50; // Tiempo entre cada cambio de color en milisegundos
    let fadeDuration = 2000; // Duración total del fade out en milisegundos
    let steps = fadeDuration / fadeInterval; // Número de pasos para el fade out
    let stepValue = 1 / steps; // Incremento para cada componente RGB en cada paso
    let r = 0
    let g = 0
    let b = 0
    let interval = utils.timers.setInterval(() => {
      // Incrementar los valores RGB para acercarse a blanco
      r += stepValue;
      g += stepValue;
      b += stepValue;
      this.currentBackgroundColor = Color4.create(r,g,b)
      // Asegurar que los valores no superen 1
      if (this.currentBackgroundColor.r >= 1) {
        r = 1;
        g = 1;
        b = 1;
        utils.timers.clearInterval(interval); // Detener el intervalo
        this.isVisible = false; // Ocultar UI después del fade out
      }

      // Forzar la actualización del UI
    }, fadeInterval);
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
          display: this.isVisible ? 'flex' : 'none',
        }}
        uiBackground={{
          color: this.currentBackgroundColor, // Usar el color de fondo actual
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
            display: this.isVisible ? 'flex' : 'none',
          }}
          uiBackground={{
            textureMode: 'stretch',
            texture: { src: this.image },
          }}
          onMouseDown={() => {
            this.startFadeOut(); // Iniciar el fade out al hacer clic
          }}
        ></UiEntity>
        <Label
          uiTransform={{
            positionType: 'absolute',
            position: { left: '40%', bottom: '8%' },
          }}
          value={this.pressanykey}
          fontSize={30}
          font="sans-serif"
          color={Color4.White()}
          textAlign="bottom-center"
        />
      </UiEntity>
    );
  }
}
