const analyze = (array) => {
  let obj = {};
  
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);

  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }

  console.log(total)
  obj.average = total / array.length;

  obj.length = array.length;

  return obj;

};

export default analyze;
