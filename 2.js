function isLetter(str) {
  return Boolean(str.match(/[a-z]/));
}
function isOdd(str) {
  mas = str.match(/\d/g)
  var a = 0; 
  for (i of mas){
    a += Number(i);
  }
  return (a % 2 === 0);
}
var str = '123abc45de';
console.log(isLetter(str[9]) && isOdd(str));