let scramble = function(arr) {
  let scrambled = [];
  let copy = arr.slice();

  while (copy.length > 0) {
    let idx = Math.floor(Math.random() * copy.length);
    scrambled.push(copy[idx]);
    copy.splice(idx, 1);
  }

  return scrambled;
}