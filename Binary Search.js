const searchThis = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low)/2)
    if (arr[mid] === num) {
      return mid;
    }

    if (num < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1;
}

const arr = [1,2,3,4,5,6,7,8]
searchThis(arr, 7)/*?.*/