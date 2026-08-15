import { Graph } from "./@maxgraph/core/index.mjs";

const container = document.getElementById("maxgraphContainer");

const width = 237;
const height = 389;

container.style = { ...container.style, width, height };

const graph = new Graph(container);

graph.insertVertex({
  size: [width, height],
  position: [0, 0],
  style: {
    image: "cheezburger/cheezburger.jpg",
    shape: "image",
  },
});

const textCommon = {
  style: {
    fillOpacity: 0,
    strokeOpacity: 0,
    fontColor: "white",
    align: "left",
    fontSize: 29,
    fontFamily: "Impact",
  },
};

graph.insertVertex({
  ...textCommon,
  value: `I CAN HAS`,
  position: [60, 36],
});

graph.insertVertex({
  ...textCommon,
  value: `CHEEZBURGER?`,
  position: [30, 70],
});
