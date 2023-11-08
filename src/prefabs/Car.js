// Car prefab
class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame); 

        this.moveSpeed = 3;     // pixels per frame
    }

    update() {
        
        // Arrow Key Input

        // left
        if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        }
        // right
        else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }
        // up
        else if (keyUP.isDown && this.y >= borderUISize + this.height) {
            this.y -= this.moveSpeed;
        }
        // down 
        else if (keyDOWN.isDown && this.y <= game.config.height - borderUISize - this.height) {
            this.y += this.moveSpeed;
        }
    }
}