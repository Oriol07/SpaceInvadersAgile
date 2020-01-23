var spaceInvaders = spaceInvaders || {};

spaceInvaders.gameState = {
    //INIT FUNCTION
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setGameSize(gameOptions.gameWidth, gameOptions.gameHeight);
                
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.game.renderer.renderSession.roundPixels = true; 
        this.game.world.setBounds(0, 0, gameOptions.gameWidth, gameOptions.gameHeight);
        
    },
    //PRELOAD FUNCTION
    preload:function(){
        this.game.stage.backgroundColor = "#46384d";
        
        //Routes
        var route_tiled = 'assets/tiled/';
        var route_spr = 'assets/images/';
        
        //MAP
        this.load.image('background', route_spr + 'background.png')
        this.load.tilemap('wallCollision', route_tiled + 'MapSpaceInvaders.json', null, Phaser.Tilemap.TILED_JSON);
        
        //Player
        this.load.image('player', route_spr + 'Ship.png');
        
        //Bullet
        this.load.image('projectile', route_spr + 'Bullet.png');
        
        //ENEMY
        this.load.spritesheet('invaderA', route_spr + 'spr_InvaderA.png', 48,32);
        this.load.spritesheet('invaderB', route_spr + 'spr_InvaderB.png',48,32);
        this.load.spritesheet('invaderC', route_spr + 'spr_InvaderC.png',48,32);
        
        
        
        this.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
       this.space.onDown.add(function(){this.createProjectile();},this); 
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        
   
    },
    create:function(){
        //Map
        
        //this.bg1 =this.game.add.tileSprite(0,0, gameOptions.gameWidth, gameOptions.gameHeight,'background');
        this.map = this.game.add.tilemap('wallCollision');
        this.tileset = this.map.addTilesetImage('background');
        this.walls = this.map.createLayer('Walls');
        
        //this.walls = this.map.createLayer('Walls');
        
        //PLAYER
        this.player = new spaceInvaders.player_prefab(this.game,gameOptions.gameWidth/2,gameOptions.gameHeight/1.2, gameOptions.playerSpeed,this);
        
        //collision
        
        this.map.setCollisionBetween(1,999,true,'Walls');
        this.game.physics.arcade.collide(this.player, this.walls);
        
        //Bullet
        this.loadProjectile();
        
        //Enemy
        this.enemies = this.add.group();
        this.enemies.enableBody = true;
        this.createEnemies();
        
        
        

        
    },
    update:function(){
        
        this.game.physics.arcade.collide(this.walls,this.player);
        this.game.physics.arcade.overlap(this.projectiles,this.enemies,this.collisionProjectileEnemy,null,this);
        
        },
    createProjectile:function(){
        var _projectile = this.projectiles.getFirstExists(false);
        if(!_projectile) {
            _projectile = new spaceInvaders.projectile_prefab(this.game, this.player.x,this.player.top);
            
            
            this.projectiles.add(_projectile);
        } 
        else {
            //reset/reciclado
           _projectile.reset(this.player.x,this.player.y);
            
        }
       _projectile.body.velocity.y = -200;
    },
    
    loadProjectile:function(){
        this.projectiles = this.add.group();
        this.projectiles.enableBody = true;
    },
    collisionProjectileEnemy:function(_bullet,_enemy){
        _bullet.kill();
        this.player.pts += 10;
        _enemy.kill(); 
    },
    createEnemies:function(){
        var _enemy;// = this.enemies.getFirstExists(false);
        
        for(var i = 0; i < 11; i++){
            for (var j = 0; j < 5; j ++)
            {
                _enemy = new spaceInvaders.enemy_prefab(this.game, 70 + i * 27, 69 + j * 25, 100, this, j);
                this.enemies.add(_enemy);
            }
        }   
        console.log(gameOptions.gameWidth - 30);
        console.log (gameOptions.gameHeight/4-43);
    }   

};





