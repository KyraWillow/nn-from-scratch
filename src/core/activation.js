const threshold = 0;

export function stepFunction(x) {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= threshold) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
}
