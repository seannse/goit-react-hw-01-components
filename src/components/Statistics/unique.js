export function formatObject(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i].label === arr[j].label) {
        arr[i].percentage += arr[j].percentage;
        arr.splice(j, 1);
        j -= 1;
      }
    }
  }
  return arr;
}
