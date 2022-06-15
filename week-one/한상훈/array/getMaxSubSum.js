export function getMaxSubSum(array) {
  let result = 0;
  const dynamicArray = Array.from({ length: array.length });
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      dynamicArray[i] = array[i];
    } else {
      dynamicArray[i] = Math.max(dynamicArray[i - 1] + array[i], array[i]);
    }
  }
  result = Math.max(...dynamicArray);
  return result > 0 ? result : 0;
}
