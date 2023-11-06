class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {

    }

    create() {
        // title screen configuration
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F8F9F9',
            color: '#FF0000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // "Start" text to switch to play scene
        this.startText = this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Start', titleConfig).setOrigin(0.5);

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Road Runner Rush', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press Start Button to Begin', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Use Arrow Keys to move Car', titleConfig).setOrigin(0.5);
        titleConfig.backgroundColor = '#FF0000';
        titleConfig.color = '#000';
    }

    update() {
        // when start button is clicked, switches to Play scene

        // Check if the "Start" text is clicked
        if (this.input.activePointer.isDown) {
            const pointerX = this.input.activePointer.x;
            const pointerY = this.input.activePointer.y;

            // Check if the click is within the bounds of the "Start" text
            if (
                pointerX >= this.startText.getTopLeft().x &&
                pointerX <= this.startText.getTopRight().x &&
                pointerY >= this.startText.getTopLeft().y &&
                pointerY <= this.startText.getBottomLeft().y
            ) {
            // Start the Play scene
            this.scene.start('playScene');
            }
        }
    }
}