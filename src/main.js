/* 

Rahamat Zaman
Road Runner Rush
Approximate hours spent on project: 

Citations/Resources: 


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