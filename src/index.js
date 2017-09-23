module.exports = function multiply(num1, num2) {
  var maxVal = Math.sqrt(Number.MAX_SAFE_INTEGER);
  if (+num1 < maxVal && +num2 < maxVal) {
    return num1*num2+'';
  } else {
    return mulBig(num1, num2);
  }
}

function mulBig(n1, n2){
  var i, res = [];

  n1 = n1.split('').reverse();
  n2 = n2.split('').reverse();

  n1.forEach(function(elemF, i){
    n2.forEach(function(elemS, j){
      res[i+j] = num(res[i+j], elemF*elemS);
    });
  });

  for(i = 0; i < res.length; i++) {
    if(Math.floor(res[i] / 10) >= 1 ) {
      // n = (res[i] - res[i] % 10) / 10;
      res[i+1] =  num(res[i+1], (res[i] - res[i] % 10) / 10);
      res[i] %= 10;
    }
  }

  return res.reverse().join('');
}

function num(num, val) {
  return num ? num + val : val;
}

