export function* specialSequence() {
  let trIdx = 1,
    trVal = 1;
  for (let sqIdx = 2, count = 0; ; sqIdx++, count = 0) {
    let sqVal = sqIdx * sqIdx;
    while (sqVal > trVal) {
      trIdx++;
      trVal = (trIdx * (trIdx + 1)) / 2;
      count++;
    }
    yield count;
  }
}
