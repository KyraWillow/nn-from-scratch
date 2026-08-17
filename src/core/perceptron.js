export function perceptron(x) {
  // Input masuk (nIn)
  let nIn = x.length;
  console.info(nIn);

  // Next layer 3 Neuron (nilai tersebut berdasarkan keputusanku)
  let nOut = 3;

  // Xaviera/Glorot Uniform
  let xaviera = 6 / (nIn + nOut);
  console.info(xaviera);

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

  console.info(w);

  let min = -2;
  let max = 2;
  console.info(Math.random() * (max - min) + min);
}

perceptron([1, 2, 3]);
