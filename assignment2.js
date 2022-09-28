// ..1..Biker A ....petrol= X .litres, k = travelled kms /litre, a = distace between halts.
//..Biker B...petrol = Y. litres, l = travelled kms / litre, a =distance between halts.

// write a program to find each biker will cross how many halts based on the petrol qty and the ltr
// per km.

function bikersTravelledDistance(X, Y, k, l, arr) {
  let ATravel = X * k;
  let BTravel = Y * l;
  let countA = 0;
  let countB = 0;
  let AtotalHalts = 0;
  let BtotalHalts = 0;

  arr?.map((number) => {
    AtotalHalts += Math.floor(number);
    BtotalHalts += Math.floor(number);
    if (ATravel > BtotalHalts) {
      countA++;
    }
    if (BTravel > AtotalHalts) {
      countB++;
    }
  });
  return [countA, countB];
}
let [X, Y] = [10, 12];
let [k, l] = [20, 15];
let arr = [40, 98, 134, 179, 211, 248];
console.log(bikersTravelledDistance(X, Y, k, l, arr));



//2Q..refer html file.....



//..3. Assume that the input will be a word with odd letter count. Print the output as given below.
// start with middle letter from first line. Next line two letter from middle . Continue still you print all
// letters in last line. Then start with the first letter and continue for the remaining letters.

function print(str) {
  let strArr = str.split("");
  let mid = str.length / 2; //0-6/2
  let op = strArr.slice(mid).concat(strArr.slice(0, mid)); //leave last letter --comewel
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    result.push(op.join(""));
    op.pop();
    op.unshift("");
  }
  result.reverse();
  return result;
}
let str = "WELCOME";
console.log(print(str));



//..4...Convert to upperCase......................................
//............................................................

function toConvert(names) {
  let Convert = names.map((ele) => {
    return ele.toUpperCase();
  });
  return Convert;
}

let names = ["divya", "seetha", "shanmugi", "mohan khan", "mohan tata"];
console.log(toConvert(names));
