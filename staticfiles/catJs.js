function meowClick() {
    var meow = document.getElementById("meow");
    meow.play();
    setTimeout(function() {
        window.open("catPage.html", "_self");
    }, 1000);
}

function logoClick() {
    window.open("index.html", "_self");
}

// STUPID BOWSER DVD SCREEN SAVER **NOT WORKING**
//function logoAnimation() {
//    const canvas = document.getElementById("canvas");
//    const ctx = canvas.getContext("2d");
//
//    function Logo() {
//        this.loading = true;
//        this.image = new Image();
//        this.image.src = "/assets/images/bowser.png";
//        this.image.onload = () => { this.loading = false; };
//        this.scaledWidth = this.image.width / 4;
//        this.scaledHeight = this.image.height / 4;
//        this.x = random(0, canvas.clientWidth - this.scaledWidth);
//        this.y = random(0, canvas.clientHeight - this.scaledHeight);
//        this.velocityX = 1;
//        this.velocityY = 1;
//
//        this.update = () => {
//            this.x += this.velocityX;
//            this.y += this.velocityY;
//        }
//
//        this.draw = (context) => {
//            context.drawImage(
//                this.image,
//                this.x,
//                this.y,
//                this.scaledWidth,
//                this.scaledHeight
//            );
//        }
//    }
//
//    let logos = [];
//
//    canvas.addEventListener("click", () => { logos.push(new Logo()); });
//
//    console.log("1");
//
//    logos.push(new Logo());
//
//    run();
//
//
//    function run() {
//        update();
//        draw();
//        window.requestAnimationFrame(run);
//    }
//
//    function update() {
//        for (let i = 0; i < logos.length; i++) {
//            logos[i].update();
//            checkWallCollision(logos[i]);
//        }
//
//    }
//
//    function draw() {
//        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
//
//        for (let i = 0; i < logos.length; i++) {
//            if (!logos[i].loading) {
//                logos[i].draw(ctx);
//            }
//        }
//    }
//
//    function random(min, max) {
//        return Math.floor((Math.random() * (max - min + 1)) + min);
//    }
//
//    function checkWallCollision(object) {
//        // right wall collision
//        if (object.x + object.scaledWidth >= canvas.clientWidth) {
//            object.velocityX = -object.velocityX;
//        }
//        // left wall collision
//        else if (object.x <= 0) {
//            object.velocityX = -object.velocityX;
//        }
//
//        // bottom wall collision
//        if (object.y + object.scaledHeight >= canvas.clientHeight) {
//            object.velocityY = -object.velocityY;
//        }
//        // top wall collision
//        else if (object.y <= 0) {
//            object.velocityY = -object.velocityY;
//        }
//    }
//}