const promise = import("./p5.min.js"); // https://cdn.jsdelivr.net/npm/p5@2.3.2/lib/p5.min.js

promise.then(() => {
  new p5((p) => {
    let img;

    p.preload = () => {
      img = p.loadImage("cheezburger.jpg"); //https://share.google/Qg3HnLI440Cy0Q7ZV
    };

    p.setup = () => {
      p.createCanvas(237, 389);
      p.image(img, 0, 0);
      p.fill(255);
      p.textFont("Impact");
      p.textSize(29);
      p.text("I CAN HAS", 60, 36);
      p.text("CHEEZBURGER?", 30, 70);
    };
  });
});
