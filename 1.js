var lang = 'en';
let msw;
if (lang === 'ru') {
  msw = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
} else if (lang === 'en') { 
  // с else, второе условие не будет лишний раз проверяться, если первое выполнилось
  msw = ['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturdat', 'Sunday'];
}
console.log(msw);