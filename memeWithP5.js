const sketch = () => {
  new p5((p) => {
    p.setup = async () => {
      const img = await p.loadImage("cheezburger.jpg"); // https://share.google/Qg3HnLI440Cy0Q7ZV
      p.createCanvas(237, 389);
      p.image(img, 0, 0);
      p.fill(255);
      p.textFont("Impact");
      p.textSize(29);
      p.text("I CAN HAS", 60, 36);
      p.text("CHEEZBURGER?", 30, 70);
    };
  });
};

document.head.appendChild(
  Object.assign(document.createElement("script"), {
    src: "./p5.min.js",
    onreadystatechange: sketch,
    onload: sketch,
  }),
);
