game_W = 0, game_H = 0;

let bg = new Image();
bg.src = "images/bg.png";
let logo = new Image();
logo.src = "images/logo.png";
let fl = new Image();

ch = ['b', 't', 'r', 'c']
idImage = [];
CARDS = [];
myCard = [];

class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        new calculator().calcula(ch)
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.initCARDS();
        this.initCards();
        this.render();
        this.initPointer();
        this.loop();
        console.log(new calculator().calcula(myCard))
        this.listenMouse();
    }

    initCARDS() {
        CARDS = []
        let obj = [];
        for (let i = 1; i <= 52; i++)
            obj.push({ x: i, y: Math.random() * 10000 });
        obj.sort(function(a, b) {
            return a.y - b.y;
        })
        obj.forEach(a => {
            CARDS.push(a.x)
        });
        this.newCard();
        this.newCard();
    }

    initPointer() {
        this.card = [];
        let Step = game_W / 10;
        let kc = Step / 20;
        let XStart = (game_W - (myCard.length * Step + (myCard.length - 1) * kc)) / 2 + Step / 2;
        for (let i = 0; i < myCard.length; i++) {
            this.card[i] = new card(this, idImage, myCard[i], XStart + i * (Step + kc), 4 * game_H / 5, Step)
        }
    }

    initCards() {
        idImage[0] = '00';
        let index = 1;
        for (let i = 1; i <= 13; i++)
            for (let j = 0; j < ch.length; j++)
                idImage[index++] = i + ch[j]
                // console.log(idImage)
    }

    newCard() {
        myCard.push(CARDS.shift());
        this.initPointer();
    }

    loop() {
        this.update();
        this.draw();
        this.render();
        setTimeout(() => this.loop(), 30);
    }

    update() {

    }


    draw() {
        this.clearScreen()
        for (let i = 0; i < myCard.length; i++)
            this.card[i].draw();
    }
    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.drawImage(bg, 0, 0, game_W, game_H);
        this.context.drawImage(logo, game_H / 20, game_H / 20, game_H / 7, game_H / 7);
        this.context.font = game_W / 20 + 'px Arial Black';
        this.context.fillStyle = "#FF00CC";
        this.context.textAlign = "center";
        this.context.fillText(new calculator().calcula(myCard), game_W / 2, 100);
    }

    listenMouse() {
        document.addEventListener("mousedown", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
            this.newCard();
            console.log(myCard)
            console.log(new calculator().calcula(myCard))
        })

        document.addEventListener("mousemove", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })

        document.addEventListener("mouseup", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })
    }

    render() {
        if (this.canvas.width != document.documentElement.clientWidth || this.canvas.height != document.documentElement.clientHeight) {
            this.canvas.width = document.documentElement.clientWidth;
            this.canvas.height = document.documentElement.clientHeight;
            game_W = this.canvas.width;
            game_H = this.canvas.height;
        }
    }

}

var g = new game();