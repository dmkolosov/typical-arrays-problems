
exports.min = function min (array=[]) {
  let min=array.length>0?array[0]:0
  for (let index = 0; index < array.length; index++) {
    if(array[index]<min){
      min=array[index]
    }
    
  }
  return min;
}

exports.max = function max (array=[]) {
  let max=array.length>0?array[0]:0
  for (let index = 0; index < array.length; index++) {
    if(array[index]>max){
      max=array[index]
    }
    
  }
  return max;
}

exports.avg = function avg (array) {
  return 0;
}
