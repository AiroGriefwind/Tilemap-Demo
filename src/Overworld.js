class Overworld extends Phaser.Scene{
    constructor (){
        super({key: 'overworldScene'})
    }

    perload(){
        this.load.path='./assets/'
        this.load.spritesheet('slime','slime.png',{
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.image('tilesetImage','tileset.png')
        this.load.tilemapTiledJSON('tilemap.json','walk-through.json')
    }

    create(){
        const map = this.add.tilemap('tilemap.json')
        
    }

    update(){

    }
}