
/*
const date = new Date();
console.log(date.toDateString('ja-JP')); // Output: 2024年10月12日土曜日
*/

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

console.log(year + "年" + month + "月" + day + "日");