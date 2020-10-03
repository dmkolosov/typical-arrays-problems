
exports.min = function min (array=[]) {
  let min=array.length>0?array[0]:0
  for (let index = 0; index < array.length; index++) {
    if(array[index]<min){
      min=array[index]
    }
    
  }
  return min;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
