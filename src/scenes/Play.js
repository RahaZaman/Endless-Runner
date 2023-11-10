class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('blue-car', './assets/img/blue-car.png');
        this.load.image('gray-car', './assets/img/gray-car.png');
        this.load.image('racetrack', './assets/img/racetrack.png');
        this.load.image('traffic-cone', './assets/img/traffic-cone.png');

        // preloading car honking sounds
        this.load.audio('car-honk1', './assets/audio/car-honk1.wav');
        this.load.audio('car-honk2', './assets/audio/car-honk2.wav');
        this.load.audio('car-honk3', './assets/audio/car-honk3.wav');
        this.load.audio('car-honk4', './assets/audio/car-honk4.wav');
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

        // define key for car horn/honk
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

        // setting car sounds to the following objects
        this.carSound1 = this.sound.add("car-honk1", { 
            volume: 0.5, 
            loop: false 
        });

        this.carSound2 = this.sound.add("car-honk2", { 
            volume: 0.5, 
            loop: false 
        });

        this.carSound3 = this.sound.add("car-honk3", { 
            volume: 0.5, 
            loop: false 
        });

        this.carSound4 = this.sound.add("car-honk4", { 
            volume: 0.5, 
            loop: false 
        });

        // stopwatch 
        this.stopwatchTime = 0;

         // configuration for stopwatch in play scene
         let stopwatchConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            // backgroundColor: '#F8F9F9',
            // color: '#FF0000',
            color: '#8B0000',
            align: 'center',
            margin: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0,
        }

        // Create a text object to display the stopwatch
        this.stopwatchText = this.add.text(510, 20, 'Time: ' + this.stopwatchTime + 's', stopwatchConfig).setOrigin(0, 0); 

        // Create a timer event that triggers every second
        this.time.addEvent({
            delay: 1000,  // 1000 milliseconds = 1 second
            callback: this.updateStopwatch,
            callbackScope: this,
            loop: true
        });

        // gameOver flag
        this.gameOver = false;
    }

    update() {
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

        // checking collision between car and traffic cone
        if (this.checkCollision(this.p1Car, this.trafficCone)) {
            this.gameOver = true;
        }

        // if H key is pressed, plays car horn/honk
        if (keyH.isDown) {
            this.carSound1.play(); 
        }
        if (keyG.isDown) {
            this.carSound2.play(); 
        }
        if (keyJ.isDown) {
            this.carSound3.play(); 
        }
        if (keyK.isDown) {
            this.carSound4.play(); 
        }

        // updates car movement 
        this.p1Car.update();
    }

    // In your scene, define the callback function to update the stopwatch
    updateStopwatch () {
        this.stopwatchTime += 1; // Increment the time by 1 second
        this.stopwatchText.setText('Time: ' + this.stopwatchTime + 's'); // Update the displayed text
    }

    checkCollision(car, trafficCone) {
        // simple AABB checking
        if (car.x < trafficCone.x + trafficCone.width && 
            car.x + car.width > trafficCone.x && 
            car.y < trafficCone.y + trafficCone.height &&
            car.height + car.y > trafficCone. y) {
                return true;
        } else {
            return false;
        }
    }

}