const array = [2, 4, 7, 5, 4, 3, 8];
const newArray = array.filter(function (a,b,item) {
  return item.indexOf(a)===b;
});
console.log(newArray);

const leapYear = (year) => {
  if (year % 4===0 && year % 100!==0 ) {
    return `${year}はうるう年です`;
  } else {
    return `${year}はうるう年ではありません`;
  }
}
console.log(leapYear(2020));
console.log(leapYear(2021));