import { aggregatePerceptron, dotProduct } from "./perceptron.js";

const sample = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const target = [0, 0, 0, 1];

let weight = dotProduct(sample[0], 1);
let bias = 0;

const learningRate = 0.1;
const maxEpoch = 30;

let epoch = 0;

while (epoch < maxEpoch) {
  let allCorrect = true;

  for (let i = 0; i < sample.length; i++) {
    const prediction = aggregatePerceptron(sample[i], weight, bias);

    const error = target[i] - prediction;

    if (error === 0) {
      console.info(
        `Data ke-${i}: prediction=${prediction}, target=${target[i]} → SUCCESS`,
      );
    } else {
      console.info(
        `Data ke-${i}: prediction=${prediction}, target=${target[i]} → FAILED`,
      );

      allCorrect = false;

      // Update weight
      for (let j = 0; j < weight.length; j++) {
        weight[j] = weight[j] + learningRate * error * sample[i][j];
      }

      // Update bias
      bias = bias + learningRate * error;
    }
  }

  console.info(`Epoch ${epoch + 1}`);
  console.info("Weight:", weight);
  console.info("Bias:", bias);

  if (allCorrect) {
    console.info("Training SUCCESS — semua data benar.");
    break;
  }

  epoch++;
}

if (epoch === maxEpoch) {
  console.info("Training berhenti karena mencapai maxEpoch.");
}
