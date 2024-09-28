// ============= 4 ETAPAS ===================
// 1) Variables y funciones comunes a todas las clases
// 2) Las clases que componen a nuestro videojuego (lógica del juego)
class MainScene extends Phaser.Scene{
    constructor(){
        super('gameScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia  DEBE DE IR PARA UBICAR EL DOCTO
        this.load.baseURL = './';
        this.load.image('desierto','./img/background.png');
        this.load.image('barracorta','./img/platform01.png');
        this.load.image('barralarga','./img/platform02.png');
        this.load.image('mario','./img/mario.png');
        this.load.image('roca','./img/roca.png');
        this.load.image('uvas','./img/uvas.png');




    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
        this.add.image(640,360,'desierto');
        var platforms = this.physics.add.staticGroup();
        platforms.create(1000, 200, 'barracorta');       
        platforms.create(430, 410, 'barracorta');
        platforms.create(700,300,'barralarga');
        platforms.create(260, 480, 'mario');
        platforms.create(600, 205, 'roca');
        platforms.create(750, 205, 'roca');
        platforms.create(1000, 70, 'uvas');




    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia
    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class Level extends Phaser.Scene{
    constructor(){
        super('levelScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia
    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class Mode extends Phaser.Scene{
    constructor(){
        super('modeScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia
    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class Controls extends Phaser.Scene{
    constructor(){
        super('controlsScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia
    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}

class EndGame extends Phaser.Scene{
    constructor(){
        super('endScene');
    }

    preload(){
        // En primer lugar, solo se ejecuta una vez
        // Multimedia
    }

    create(){
        // En segundo lugar, se ejecuta una vez
        // Toda la lógica del videojuego
    }

    update(){
        // En tercer lugar, se ejutar una y otra vez
        // Actualización de multimedia
    }

}


// 3) Configuración base del videojuego
const config={
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    // Array que indica el orden de visualización del vj
    scene: [MainScene, Menu, Level, Mode, Controls, EndGame],
    scale: {
        mode: Phaser.Scale.FIT
    },physics:{
        default: 'arcade',
        arcade:{
            debug: false,
            gravity: {
                y: 300,
            },
        },
    },
}
// 4) Inicialización de Phaser
new Phaser.Game(config);

