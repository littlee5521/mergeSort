function mergeSort(x) {
  if (x.length == 1) {
    return x
  }
  else {
    const half = Math.ceil(x.length / 2);
    let temp = mergeSort(x.slice(0, half))
    let temp2 = mergeSort(x.slice(half));
    let placeHolder = []

    while (temp.length != 0 || temp2.length != 0) {

      if (temp[0] < temp2[0]) {
        placeHolder.push(temp.shift())
        if (temp == 0 && temp2.length != 0) {
          placeHolder.push(temp2.shift())
        }
      }
      else {
        if (temp2[0] != undefined) {
          placeHolder.push(temp2.shift())
        }

        if (temp2 == 0 && temp.length != 0) {
          placeHolder.push(temp.shift())
        }
      }
    }
    return placeHolder
  }
}

console.log(mergeSort([50, 31, 21, 28, 72, 41, 73, 93, 68, 43, 45, 78, 5, 17, 97, 71, 69, 61, 88, 75, 99, 44, 55, 9]))
