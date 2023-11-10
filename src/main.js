/* 

Rahamat Zaman
Road Runner Rush
Approximate hours spent on project: 12 hours

Citations/Resources: 

background music: 
https://pixabay.com/music/search/racing/

all the different car honk sounds: 
https://pixabay.com/sound-effects/search/car-horn/ 

art tool used for drawings and assets
https://www.pixilart.com/ 

https://medium.com/@seanhetzel1/how-to-play-audio-while-a-key-is-held-down-in-phaser-3-cfd5183f13af 
*/

// define and configure main Phaser game object
let config = {
    type: Phaser.AUTO,
    height: 780,
    width: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        // arcade: {
        //     debug: true,
        //     gravity: {
        //         x: 0,
        //         y: 0
        //     }
        // }
    },
    scene: [ Title, Play, GameOver ]
}

// define game
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// define global variables

// keyboard variables to move car
let keyLEFT, keyRIGHT, keyUP, keyDOWN;

// keyboard variables for the different car honk sounds
let keyH, keyG, keyJ, keyK;