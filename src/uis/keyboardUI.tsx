import { UiCanvasInformation, engine } from '@dcl/sdk/ecs';
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs';
import { GameController } from '../controllers/gameController';
import { Color4 } from '@dcl/sdk/math';
import * as utils from '@dcl-sdk/utils';
import { UIController } from '../controllers/uiController';
import { AudioManager } from '../imports/components/audio/audio.manager';

export class KeyBoardUI {
  image: string = 'assets/ui/UI_Keyboard.png';
  IMAGE_SCALE: number = 0.7;
  isVisible: boolean = false;
  pressanykey: string = 'Press left click to Continue...';
  currentBackgroundColor: Color4 = Color4.create(0, 0, 0, 1); // Negro con alpha 1
  isFadingOut: boolean = false; // Bandera para controlar el estado de fade out
  uiController: UIController
  constructor(uiController: UIController) {
    this.uiController = uiController
  }

  // Función para iniciar el efecto de fade out
  startFadeOut() {
    if (this.isFadingOut) return; // Si ya está haciendo fade out, no hacer nada

    this.isFadingOut = true; // Marcar que el fade out ha comenzado
    let fadeInterval = 62; // Ajuste para que coincida con el ejemplo proporcionado
    let stepValue = 0.05;  // Decremento de alpha para cada paso
    let alpha = 1; // Valor inicial de alpha

    let interval = utils.timers.setInterval(() => {
      // Decrementar el valor de alpha para hacer transparente
      alpha -= stepValue;
      this.currentBackgroundColor = Color4.create(0, 0, 0, alpha);

      // Asegurar que alpha no sea menor que 0
      if (alpha <= 0) {
        alpha = 0;
        utils.timers.clearInterval(interval); // Detener el intervalo
        this.isVisible = false; // Ocultar UI después del fade out
        this.isFadingOut = false; // Restablecer bandera al finalizar
        AudioManager.instance().playOnce("pop_up_close", { volume: 0.2, parent: this.uiController.gameController.spawnIsland.tobor.entity })
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
            this.uiController.widgetTasksBox.showTasks(true)
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
