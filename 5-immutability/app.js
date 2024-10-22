//TODO: Array add ,, remove ,, update
// add
// remove
// update
// const fruits = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Date",
//   "Elderberry",
//   "Fig",
//   "Grape",
//   "Honeydew",
// ];

// todo: add new item to array
// const arr=[...fruits,"Kiwi"]

// todo: remove item from array
// const arr=fruits.filter((el)=>el !== "Date")

// todo: update item in array
// const arr = fruits.map((el) => (el === "Date" ? "PineApple" : el));
// console.log(fruits);
// console.log(arr);
// --------------------------------------

//TODO: Objct add ,, remove ,, update
// add
// remove
// update

// todo: add new item to object

// const macBook = {
//   model: "MacBook Pro",
//   storage: "1TB SSD",
//   price: 2000,
// };

//add new item to object
// const obj = { ...macBook, color: "grey", cpu: "M1" };

//remove item from object
// const { storage, ...obj } = macBook;

//update item in object
// const obj ={...macBook, price: 3500}

// console.log(macBook);
// console.log(obj);

const products = [
  { id: 1, name: "Laptop", stock: 50, price: 1200, rating: 4.5 },
  { id: 2, name: "Smartphone", stock: 100, price: 800, rating: 4.7 },
  { id: 3, name: "Headphones", stock: 200, price: 150, rating: 4.2 },
  { id: 4, name: "Keyboard", stock: 75, price: 100, rating: 4.0 },
  { id: 5, name: "Monitor", stock: 30, price: 250, rating: 4.4 },
];

//todo: add new object item to array
// const newObj = { id: 6, name: "Mouse", stock: 50, price: 50, rating: 3.5 };
// const arr = [...products, newObj];

//todo; remove object item from array
// const arr = products.filter((el) => el.id !== 3);

//todo: update object item in array
// const arr = products.map((el) => {
//   if (el.id === 3) {
//     return { ...el, stock: el.stock + 50 };
//   }
//   return el;
// });

const arr = products.map((el) => {
  return { ...el, price: el.price + 100 };
});
console.table(products);
console.table(arr);
