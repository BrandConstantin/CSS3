window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
        preload: preload,
        create: create,
        update: update
    });

    function preload() {
        game.load.image('star', 'assets/star.png');
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('dude', 'assets/dude.png');
    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //background Game
        game.add.sprite(0, 0, 'sky');

        //2 barras para saltar
        platforms = game.add.group();

        platforms.enableBody = true;

        //creamos la ierba
        var ground = platforms.create(0, game.world.height - 64, 'ground');

        ground.scale.setTo(2, 2);
        ground.body.immovable = true;

        var ledge = platforms.create(400, 400, 'ground');
        ledge.body.immovable = true;
        ledge = platforms.create(-150, 250, 'ground');
        ledge.body.immovable = true;
    }
}