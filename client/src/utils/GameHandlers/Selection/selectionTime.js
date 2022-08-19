import { shuffle } from "d3-array";

function generateTime() {
  const answers = {
    right: "n\u00B2",
    wrong: shuffle(["n", "logn", "nlogn"]),
  };

  return answers;
}

export default generateTime;
