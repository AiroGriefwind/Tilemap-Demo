class Overworld extends Phaser.Scene{
    constructor (){
        super({key: 'overworldScene'})
    }

    preload(){
        this.load.path='./assets/'
        this.load.spritesheet('slime','slime.png',{
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.image('tilesetImage','tileset.png')
        this.load.tilemapTiledJSON('tilemapJSON','area01.json')
    }

    create(){
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tileset','tilesetImage')

        //add layer
        const bglayer = map.createLayer('background',tileset,0,0)
        const terrainLayer = map.createLayer('terrain',tileset,0,0)
        const trees = map.createLayer('trees',tileset,0,0)
    }

    update(){

    }
}