import { stepFunction } from "./activation.js";

export function dotProduct(x, valueNOut) {
  // Input masuk (nIn)
  let nIn = x.length;
  //   console.info(nIn);

  // Next layer 3 Neuron (nilai tersebut berdasarkan keputusanku)
  let nOut = valueNOut;

  // Xaviera/Glorot Uniform
  let xaviera = Math.sqrt(6 / (nIn + nOut));
  //   console.info(xaviera);

  let w = [];

  for (let i = 0; i < nOut; i++) {
    let neuronInput = [];

    for (let j = 0; j < nIn; j++) {
      let min = -xaviera;
      let max = xaviera;
      let dataWeight = Math.random() * (max - min) + min;
      neuronInput.push(dataWeight);
    }
    w.push(neuronInput);
    if (nOut === 1) {
      return w[0];
    }
  }

  return w;

  //   let min = -2;
  //   let max = 2;
  //   console.info(Math.random() * (max - min) + min);
}

export function perceptronLearning(x, weight, b = 0) {
  // Untuk BIAS awal kita definisikan manual terlebih dahulu
  let z = 0;

  for (let j = 0; j < weight.length; j++) {
    let multiplication = x[j] * weight[j];
    z += multiplication;
  }

  z += b;

  return z;
}

export function aggregatePerceptron(x, weight, b = 0) {
  const z = perceptronLearning(x, weight, b);

  const prediction = stepFunction(z);

  return prediction;
}

// let data = [1, 2, 3];
// let weight = dotProduct(data);
// let perceptron = perceptronLearning(data, weight);
// console.info("ini perception " + perceptron);

// let testing = aggregatePerceptron([1, 2, 3]);
// console.info(testing);
