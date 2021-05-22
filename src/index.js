// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// arr6[0] = 100;

// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "jake"];
// for (let index =0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

nameArr.map((name) => console.log(name));

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const newNameArr = nameArr.map((name) => {
  if (name === "jake") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
nameArr.map((name) => console.log(name));

/**
 * filterは、returnで書いた条件に一致する引数を返す
 */
const numArr = [1, 2, 3, 4, 5, 6];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

/**
 * 三項演算子
 */

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を設定してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です。";
};

console.log(checkSum(50, 110));
