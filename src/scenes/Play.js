class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('blue-car', './assets/img/blue-car.png');
        this.load.image('gray-car', './assets/img/gray-car.png');
        this.load.image('racetrack', './assets/img/racetrack.png');
    }

    create() {
        this.racetrack = this.add.tileSprite(0, 0, 1200, 1560, 'racetrack').setOrigin(0, 0);

        // Scale the racetrack image to fit the game screen
        this.racetrack.setScale(0.5, 0.5);

        // car 
        this.p1Car = new Car(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'blue-car').setOrigin(0.5, 0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // gameOver flag
        this.gameOver = false;

        // initializing timer to zero
        this.timer = 0;

        // displaying timer on screen
        // changes x and y values in order to have it displayed (play around with the numbers)
        // this.timerText = this.add.text(game.config.width - 100, 15, 'Time: 0s', stopwatchConfig);

        // callback function to update the timer every second
        // this.time.addEvent({
        //     delay: 1000,  // 1000 milliseconds = 1 second
        //     callback: this.updateTimer,
        //     callbackScope: this,
        //     loop: true
        // });

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
        // scrolling of background image (racetrack)
        this.racetrack.tilePositionY -= 2;
    }

    // function that increments the timer and updates the displayed text
    // updateTimer() {
    //     this.timer++;
    //     this.timerText.setText('Time: ' + this.timer + 's');
    // }

}