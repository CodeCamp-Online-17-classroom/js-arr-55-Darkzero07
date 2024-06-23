// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = "I live in Thailand";

const text = str.split(" ");

const textCount = {};
text.forEach((item) => {
  textCount[item] = (textCount[item] || 0) + 1;
});
console.log(textCount);
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
