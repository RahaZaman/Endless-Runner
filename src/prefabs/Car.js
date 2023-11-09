// Car prefab
class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame); 

        scene.add.existing(this); // add to existing

        this.moveSpeed = 1.5;     // pixels per frame
    }

    update() {
        
        // Arrow Key Input

        // left
        if (keyLEFT.isDown && this.x >= 185) {
            this.x -= this.moveSpeed;
        }
        // right
        else if (keyRIGHT.isDown && this.x <= 470) {
            this.x += this.moveSpeed;
        }
        // up
        else if (keyUP.isDown && this.y >= -50) {
            this.y -= this.moveSpeed;
        }
        // down 
        else if (keyDOWN.isDown && this.y <= 660) {
            this.y += this.moveSpeed;
        }
    }
}