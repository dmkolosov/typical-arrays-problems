
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

exports.avg = function avg (array=[]) {
  let avg=array.length>0?array[0]:0
  avg=array.reduce((prev,cur)=>prev+cur,0)
  return avg!=0?avg/array.length:0
}
