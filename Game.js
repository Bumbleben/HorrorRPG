var mainState = {
	preload: function() {
		game.load.image('map','assests/images/2cd3b4fd5266d01625fb3110962bd40735fa352b.png' );
        game.load.image('character', 'assests/images/Horror game character sprite sheet.png');
	},
    
    create: function() {
    
        this.map = game.add.tileSprite(0,0,game.world.width, game.world.height, 'map');
        this.map.tileScale.set(0.4);
        this.sprite = game.add.sprite(300,10,'character')
        this.cursor = game.input.keyboard.createCursorKeys();
    },
    update: function() {
         if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.sprite.x -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.sprite.x += 4;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.sprite.y -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.sprite.y += 4;
        }
            
        
    }
}








var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');