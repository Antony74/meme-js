import { Graph } from "./@maxgraph/core/index.mjs";

const container = document.getElementById("maxgraphContainer");

const width = 237;
const height = 389;

container.style = { ...container.style, width, height };

const graph = new Graph(container);
const parent = graph.getDefaultParent();

graph.insertVertex({
  parent,
  size: [width, height],
  position: [0, 0],
  style: {
    image: `cheezburger.jpg`,
    shape: "image",
  },
});

const textCommon = {
  parent,
  size: [100, 100],
  style: {
    fillOpacity: 0,
    strokeOpacity: 0,
    fontColor: "white",
    verticalAlign: "top",
    align: "left",
    fontSize: 29,
    fontFamily: "Impact",
  },
};

graph.insertVertex({
  ...textCommon,
  value: `I CAN HAS`,
  position: [60, 25],
});

graph.insertVertex({
  ...textCommon,
  value: `CHEEZBURGER?`,
  position: [30, 55],
});
