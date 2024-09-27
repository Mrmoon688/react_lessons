const points = [4, 2, 5, 3, 2, 7, 1, 4];
//! point total - imperative programming paradigm
//  လိုချင်တဲ့ result ရဖို့ အဆင့်ဆင့် code  ရေးရတာကို imperative programming paradigm ပါ

// let total = 0; // state 1

// total += points[0]; // state 2
// total += points[1]; // state 3
// total += points[2]; // state 4
// total += points[3]; // state 5
// total += points[4]; // state 6
// total += points[5]; // state 7
// total += points[6]; // state 8
// total += points[7]; // state 9

// for (let point of points) {
//   total += point;
// }
// console.log(total);
//  ----------------------------------------------

//! မိမိလိုချင်တာကို ဘဲ ဦးတည်ပြီးတော့ ရေးတာကို declarative Programming လို့ခေါ်တယ်

// const total = points.reduce((pv, cv) => pv + cv);
// console.log("The total is: ", total);

//------------------------------------------------------------------------

// ! uniqueArray[] ပုံစံနဲ့ရေးပုံ imperative programming paradigm

// const uniqueArray = [];

// for (let point of points) {
//   //   console.log(point);

//   // false ဖြစ်မှ အလုပ်လုပ်စေချင်တာကြောင့် ! ထည့်ထားတယ်
//   if (!uniqueArray.includes(point)) {
//     uniqueArray.push(point);
//   }
//   console.log(uniqueArray);
// }

// console.log(uniqueArray);

// ! uniqueArray[] ပုံစံနဲ့ရေးပုံ declarative Programming paradigm

// const uniqueArray = new Set(points);
// console.log(uniqueArray);
// -------------------

// ! Declarative programming paradigm ရဲ့ functional programming 1. avoid changing state, 2. mutable data
//? 1. avoid changing stage ဆိုတာ အဆင့်ဆင့်လိုက်ရေးနေတာကိုရှောင်တယ်
//? 2. mutable data ဆိုတာ အရင် ရှိနှင့်ပြီးသား data ကို အသစ်ပြုပြင်ပြောင်းလဲတာကို မလုပ်ဘူး.

// console.log(points); // main data
// points.push("aaa"); // added new data
// console.log(points); // result with added data

//-- ဒါကတော့ main data ကို မထိခိုက်စေဘဲ ရေးတဲ့ပုံစံ function programming
const newPoints = [...points, "aaa", "bbb", "ccc"]; // aaa = data  အသစ်ကို ထည့်လိုက်ပေမဲ့ အရင် data ကို မထိခိုက်စေဘူး...
console.log(newPoints);
console.log(points); 
