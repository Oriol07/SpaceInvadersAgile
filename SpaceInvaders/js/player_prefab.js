var spaceInvaders = spaceInvaders || {};

spaceInvaders.player_prefab = function(_game,_x,_y,_speed,_level,_playerLifes)
{
    Phaser.Sprite.call(this,_game,_x,_y,'player');
    
    
    this.anchor.setTo(.5);
    this.scale.setTo(.5);
    this.level = _level;
    this.speed = _speed;
    this.direction = 0;
    this.pts = 0;
    
    
     this.cursors = this.game.input.keyboard.createCursorKeys();
    _game.add.existing(this);
    _game.physics.arcade.enable(this);
    
}

spaceInvaders.player_prefab.prototype = Object.create(Phaser.Sprite.prototype);
spaceInvaders.player_prefab.prototype.constructor = spaceInvaders.player_prefab;

spaceInvaders.player_prefab.prototype.update = function(){ 
   //MOVEMENT
    //Left
    if(this.cursors.left.isDown)
    {
        //this.direction = -1;
        this.body.velocity.x = -this.speed;
    }
    //Right
    else if(this.cursors.right.isDown)
    {
        //this.direction = +1;
        this.body.velocity.x = +this.speed;
    }
    else {
        this.body.velocity.x = 0;
    }
}
