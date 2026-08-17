    const ctx = document.getElementById("memeCanvas").getContext("2d");

    const img = new Image();
    img.src = "cheezburger/cheezburger.jpg";

    img.onload = () => {
        ctx.drawImage(img, 0, 0);

        ctx.font = "29px Impact";
        ctx.fillStyle = "white";

        ctx.fillText("I CAN HAS", 60, 36);
        ctx.fillText("CHEEZBURGER?", 30, 70);
    };
