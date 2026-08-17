const threshold = 0;

export function stepFunction(x) {
  if (x >= threshold) {
    return 1;
  } else {
    return 0;
  }
}
