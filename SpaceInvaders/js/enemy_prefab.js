var spaceInvaders = spaceInvaders || {};

spaceInvaders.enemy_prefab = function(_game,_x,_y,_speed,_level,_alturaLVL){
    if (_alturaLVL == 0 || _alturaLVL == 3)
        Phaser.Sprite.call(this,_game,_x,_y,'invaderA');
    else if (_alturaLVL == 2 || _alturaLVL == 5)
        Phaser.Sprite.call(this,_game,_x,_y,'invaderB');
    else if (_alturaLVL == 1 || _alturaLVL == 4)
        Phaser.Sprite.call(this,_game,_x,_y,'invaderC');
    
    this.level = _level;
    this.speed = _speed;
    
    this.anchor.setTo(.5);
    this.scale.setTo(.45);
    this.animations.add('mov',[0,1],2,true);
     this.animations.play('mov');
    
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    _game.add.existing(this);
    _game.physics.arcade.enable(this);
    
};

spaceInvaders.enemy_prefab.prototype = Object.create(Phaser.Sprite.prototype);
spaceInvaders.enemy_prefab.prototype.constructor = spaceInvaders.enemy_prefab;



    