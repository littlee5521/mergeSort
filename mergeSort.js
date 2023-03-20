function mergeSort(x) {
  if (x.length == 1) {
    return x
  }
  else {
    const half = Math.ceil(x.length / 2);
    let temp = mergeSort(x.slice(0, half))
    console.log("is it here")
    console.log(temp)
    let temp2 = mergeSort(x.slice(half));
    console.log("or here")
    console.log(temp2)
    let placeHolder = []

    while (temp.length != 0 || temp2.length != 0) {

      console.log(temp[0])
      console.log(temp2[0])
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

console.log(mergeSort([4, 2, 1, 9, 7]))
