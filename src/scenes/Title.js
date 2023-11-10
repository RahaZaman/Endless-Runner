class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {
        this.load.image('title-background', './assets/img/title-background.png')

        // loading background music
        this.load.audio('background-music', './assets/audio/background-music.wav'); 
    }

    create() {
        // title background image
        this.titleBackground = this.add.tileSprite(0, 0, 1200, 1560, 'title-background').setOrigin(0, 0);

        // Scale the title background to fit the game screen
        this.titleBackground.setScale(0.5, 0.5);

        // Object value for background music that constantly loops
        this.backgroundMusic =  this.sound.add('background-music', {
            volume: 0.4,
            loop: true
        })

        // Plays object to play sound
        this.backgroundMusic.play();

        // title screen configuration
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '26px',
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
        this.startText = this.add.text(game.config.width/2, game.config.height/1.5 + borderUISize*2 + borderPadding*2, 'Start', titleConfig).setOrigin(0.5);

        // show menu text
        this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, 'Road Runner Rush', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3.95, 'Press Start Button to Begin', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3.85 + borderUISize + borderPadding, 'Use Arrow Keys to Move Car', titleConfig).setOrigin(0.5);
        titleConfig.backgroundColor = '#FF0000';
        titleConfig.color = '#000';
        
        // instruction configuration
        let instructionConfig = {
            fontFamily: 'Courier',
            fontSize: '18px', 
            color: '#FF0000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // instruction text within title screen
        this.add.text(125, 400, 'Movement Controls & Instructions', instructionConfig);
        this.add.text(225, 425, '← to Move Left', instructionConfig); 
        this.add.text(225, 450, '→ to Move Right', instructionConfig); 
        this.add.text(225, 475, '↑ to Move Up', instructionConfig); 
        this.add.text(225, 500, '↓ to Move Down', instructionConfig);
        this.add.text(90, 525, 'Press H,G,J,K for a different Car Honks', instructionConfig);
        this.add.text(125, 550, 'Dodge the incoming Traffic Cones', instructionConfig);
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