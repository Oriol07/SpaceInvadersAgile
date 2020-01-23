var spaceInvaders = spaceInvaders || {};


var gameOptions ={
    gameWidth:32*20,
    gameHeight:32*14,
    playerSpeed:100,
    playerLifes: 3
    
    
};

spaceInvaders.game = new Phaser.Game(gameOptions.gameWidth,gameOptions.gameHeight,Phaser.AUTO,null,this,false,false);

spaceInvaders.game.state.add('main',spaceInvaders.gameState);
//spaceInvaders.game.state.add('menu',spaceInvaders.menu);
spaceInvaders.game.state.start('main');






