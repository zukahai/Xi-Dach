class card {
    constructor(game, idImage, id, x, y, Width) {
        this.game = game;
        this.idImage = idImage;
        this.id = id;
        this.cardIM = new Image();
        this.cardIM.src = "Cards/" + this.idImage[this.id] + ".png";
        this.x = x;
        this.y = y;
        this.Width = Width;
    }

    draw() {
        let wC = this.Width;
        let hC = 7 * wC / 5;
        this.game.context.drawImage(this.cardIM, this.x - wC / 2, this.y - hC / 2, wC, hC);
        // console.log(ch)
    }
}