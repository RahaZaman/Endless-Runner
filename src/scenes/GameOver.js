class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }

    preload() {

    }

    create() {
        // game over screen configuration
        let gameoverConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            // background color is set to a white color 
            backgroundColor: '#FDFEFE',
            color: '#FF0000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // "Restart" to switch back to the Play scene
        this.restartText = this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Restart', ).setOrigin(0.5);

        // show game over text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Game Over', gameoverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Click Restart Button to restart game', gameoverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Your Time was: ' + this.timer, gameoverConfig).setOrigin(0.5);
        titleConfig.backgroundColor = '#FF0000';
        titleConfig.color = '#000';
    }

    update() {
        // when Restart button is clicked, switches back to Play scene

        // Check if the "Restart" text is clicked
        if (this.input.activePointer.isDown) {
            const pointerXValue = this.input.activePointer.x;
            const pointerYValue = this.input.activePointer.y;

            // Check if the click is within the bounds of the "Restart" text
            if (
                pointerXValue >= this.restartText.getTopLeft().x &&
                pointerXValue <= this.restartText.getTopRight().x &&
                pointerYValue >= this.restartText.getTopLeft().y &&
                pointerYValue <= this.restartText.getBottomLeft().y
            ) {
            // Go back to Play Scene
            this.scene.start('playScene');
            }
        }
    }
}