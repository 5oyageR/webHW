let game = {
    canvas: null,
    ctx: null,
    sprites : {
        bg: null,
    cell: null
    },
    start (){
         this.canvas = document.getElementById("mycanvas");
         this.ctx = this.canvas.getContext("2d");

    }, preload (){
       this.run();
       this.sprites.bg = new Image();
        this.sprites.bg.src = "img/background.png";

         this.sprites.cell = new Image();
        this.sprites.cell.src = "img/cell.png";
         for (let key in this.sprites) {
             
         }

        this.bg.addEventListener("load", () => {
            this.run();
        });
    },
    run () {
        window.requestAnimationFrame(() => {
            this.ctx.drawImage(this.bg,0,0);
           });
    }
};
game.start();