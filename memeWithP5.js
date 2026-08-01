const promise = import("./p5.min.js"); // https://cdn.jsdelivr.net/npm/p5@1.11.13/lib/p5.min.js

promise.then(() => {
  new p5((p) => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(200);
    };
  });
});
