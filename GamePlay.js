GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/montaña.png");
		me.load.spritesheet("terodactilo","assets/images/terodactilo.png",96,97);
		me.load.spritesheet("dinosaurio","assets/images/SP.png",72,161);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');

		me.terodactilo= me.game.add.sprite(50,30,"terodactilo");
		me.terodactilo.animations.add("right",[0,1,2,3],8,true);
		me.terodactilo.animations.add("left",[4,5,6,7],8,true);
		me.terodactilo.animations.play("right");

        me.terodactilo2= me.game.add.sprite(1000,200,"terodactilo");
		me.terodactilo2.animations.add("right",[0,1,2,3],8,true);
		me.terodactilo2.animations.add("left",[4,5,6,7],8,true);
		me.terodactilo2.animations.play("right");
        
		me.dinosaurio=me.game.add.sprite(350,450,"dinosaurio");
		me.dinosaurio.animations.add("right",[0,1,2],8,true);
		//me.dinosaurio.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.dinosaurio.animations.play("right");
    },
    update: function() {
		var me=this;
		me.terodactilo.x+=2;
		me.dinosaurio.x+=1;
        me.terodactilo2.x-=1;
		if(me.terodactilo.x>=me.game.world.width){
			me.terodactilo.x=-100;
			}
        if(me.terodactilo2.x>=me.game.world.width){
            me.terodactilo2.x=100;
            }
		if(me.dinosaurio.x>=me.game.world.width){
			me.dinosaurio.x=-50;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");