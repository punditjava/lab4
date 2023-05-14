mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let pros_odd = 1; let sum_even = 0;
for (i of mas) {
  if (i % 2 === 1) {
    pros_odd *= i;
  } else {
    sum_even += i;
  }
};
console.log(pros_odd);
console.log(sum_even);