new p5((p) => {
  let img;

  p.setup = async () => {
    img = await p.loadImage("cheezburger.jpg"); // https://share.google/Qg3HnLI440Cy0Q7ZV
    p.createCanvas(237, 389);
    p.image(img, 0, 0);
    p.fill(255);
    p.textFont("Impact");
    p.textSize(29);
    p.text("I CAN HAS", 60, 36);
    p.text("CHEEZBURGER?", 30, 70);
  };
});
