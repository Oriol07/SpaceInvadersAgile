var spaceInvaders = spaceInvaders || {};

spaceInvaders.projectile_prefab = function (_game, _x, _y)
{
     Phaser.Sprite.call(this,_game,_x,_y,'projectile');
   this.anchor.setTo(.5);
    this.scale.setTo(.4);
    _game.physics.arcade.enable(this);
    this.body.allowGravity = false;
    
};

spaceInvaders.projectile_prefab.prototype = Object.create(Phaser.Sprite.prototype);

spaceInvaders.projectile_prefab.prototype.constructor = spaceInvaders.projectile_prefab; 