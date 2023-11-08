class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('blue-car', './assets/img/blue-car.png');
        this.load.image('gray-car', './assets/img/gray-car.png');
        this.load.image('racetrack', './assets/img/racetrack.png');
        this.load.image('traffic-cone', './assets/img/traffic-cone.png')
    }

    create() {
        this.racetrack = this.add.tileSprite(0, 0, 1200, 1560, 'racetrack').setOrigin(0, 0);

        // Scale the racetrack image to fit the game screen
        this.racetrack.setScale(0.5, 0.5);

        // car 
        this.p1Car = new Car(this, config.width/2, game.config.height - borderUISize - borderPadding, 'blue-car').setOrigin(0.5, 0);
        // this.p1Car = new Car(this, 300, 0, 'blue-car').setOrigin(0.5, 0);

        // traffic cone
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);


        // gameOver flag
        this.gameOver = false;

        // initializing the stopwatch to zero
        // this.stopwatch = 0;

        // Setting up the timer event 
        // this.stopwatchEvent = this.time.addEvent({
        //     delay: 1000, // 1000 milliseconds = 1 second
        //     callback: updateGameStopwatch,
        //     callbackScope: this,
        //     loop: true,
        // });

        // function updateGameStopwatch() {
        //     // Increment stopwatch by 1 second
        //     this.stopwatch += 1;
            
        //     // Updating the displayed stopwatch text
        //     this.stopwatchText.setText(this.stopwatch);
            
        //     // if (this.gameSeconds <= 0) {
        //     //     this.gameOver = true; 
        //     //     this.time.removeEvent(this.timerEvent);
        //     // }
        // }

        // displaying stopwatch on screen
        // this.stopwatchText = this.add.text(borderUISize + borderPadding*47, borderUISize + borderPadding*2, 'Time: ' + this.stopwatch + 's', stopwatchConfig);

        // configuration for stopwatch in play scene
        let stopwatchConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F8F9F9',
            color: '#FF0000',
            align: 'center',
            margin: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 80,
        }
    }

    update() {
        // makes the racetrack move, updates the tile sprite
        this.racetrack.tilePositionY -= 3;

        // updates car movement 
        this.p1Car.update();
    }

}