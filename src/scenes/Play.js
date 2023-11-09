class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('blue-car', './assets/img/blue-car.png');
        this.load.image('gray-car', './assets/img/gray-car.png');
        this.load.image('racetrack', './assets/img/racetrack.png');
        this.load.image('traffic-cone', './assets/img/traffic-cone.png');
    }

    create() {
        this.racetrack = this.add.tileSprite(0, 0, 1200, 1560, 'racetrack').setOrigin(0, 0);

        // Scale the racetrack image to fit the game screen
        this.racetrack.setScale(0.5, 0.5);

        // car 
        this.p1Car = new Car(this, this.racetrack.width/3.75, 650, 'blue-car').setOrigin(0.5, 0);

        // adjusting the size of the car
        this.p1Car.setScale(0.12, 0.12); 

        // traffic cone
        this.trafficCone = this.physics.add.sprite(170, this.randomY, 'traffic-cone');
        // establishing hitbox 
        this.trafficCone.setCircle(this.trafficCone.width/3, 300, 450); 

        // setting the scale of the object
        this.trafficCone.setScale(0.05, 0.05);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // stopwatch 
        
        // this.stopwatch = update(time, delta); 

        // displaying stopwatch in scene

        // gameOver flag
        this.gameOver = false;

        this.physics.add.collider(this.p1Car, this.trafficCone, (p1Car, trafficCone) => {
            // stop the stopwatch

            this.gameOver = true;
        })

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
        // if gameOver value is set to true switches to Game Over Scene
        if (this.gameOver == true) {
            this.scene.start('gameOverScene');
        }

        // makes the racetrack move, updates the tile sprite
        this.racetrack.tilePositionY -= 3;

        // Move the traffic cone down by increasing its Y position
        this.trafficCone.y += 2;

        // Array that stores x values for middle of the lanes
        this.xSpawnPoint = [250, 335, 425, 170];
        // to get random value from the array - index
        this.xSpawnPointIndex = Phaser.Math.Between(0, 3); 

        // Generate a random Y coordinate within the specified range
        this.randomY = Phaser.Math.Between(25, 100);

        // Conditions to reset the traffic cone to the top
        if (this.trafficCone.y >= 780) {
            this.trafficCone.setPosition(this.xSpawnPoint[this.xSpawnPointIndex], this.randomY);
        }

        // updates car movement 
        this.p1Car.update();
    }

}