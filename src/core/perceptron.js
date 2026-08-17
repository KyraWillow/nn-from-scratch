import { stepFunction } from "./activation.js";

export function dotProduct(x) {
  // Input masuk (nIn)
  let nIn = x.length;
  //   console.info(nIn);

  // Next layer 3 Neuron (nilai tersebut berdasarkan keputusanku)
  let nOut = 3;

  // Xaviera/Glorot Uniform
  let xaviera = 6 / (nIn + nOut);
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
  }

  return w;

  //   let min = -2;
  //   let max = 2;
  //   console.info(Math.random() * (max - min) + min);
}

export function perceptronLearning(x, weight) {
  // Untuk BIAS awal kita definisikan manual terlebih dahulu
  let b = 0;

  let z = [];

  //   console.info(x[0]);
  //   console.info(weight[0][0]);
  //   console.info(weight.length);

  for (let i = 0; i < x.length; i++) {
    let result = 0;
    for (let j = 0; j < weight.length; j++) {
      let multiplication = x[j] * weight[i][j];
      result += multiplication;
    }
    z.push(result);
  }

  let step = stepFunction(z);
  return step;
}

let data = [1, 2, 3];
let weight = dotProduct(data);
let perceptron = perceptronLearning(data, weight);
console.info("ini perception " + perceptron);
