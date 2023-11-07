class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
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
        this.restartText = this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Restart', gameoverConfig).setOrigin(0.5);

        // "Return to Menu" 
        this.returnMenu = this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Return to Menu Page', titleConfig).setOrigin(0.5)

        // show game over text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Game Over', gameoverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Click Restart Button to restart game', gameoverConfig).setOrigin(0.5);
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Your Time was: ' + this.timer, gameoverConfig).setOrigin(0.5);
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

        // when "Return to Menu" button is clicked, switches back to Menu scene

        // Check if the "Return to Menu" text is clicked
        if (this.input.activePointer.isDown) {
            const pointerXVal = this.input.activePointer.x;
            const pointerYVal = this.input.activePointer.y;

            // Check if the click is within the bounds of the "Return to Menu" text
            if (
                pointerXVal >= this.restartText.getTopLeft().x &&
                pointerXVal <= this.restartText.getTopRight().x &&
                pointerYVal >= this.restartText.getTopLeft().y &&
                pointerYVal <= this.restartText.getBottomLeft().y
            ) {
            // Go back to Title Scene
            this.scene.start('titleScene');
            }
        }
    }
}