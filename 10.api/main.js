import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");
const app = document.querySelector("#app");
const handleFetchBtn = async () => {
  //! synchronous programming
  //! Asynchronous Programming
  //todo: async => await
  // ! human error - logical error ကိုယ်ဘာသာ မှားရေးထားတဲ့ Error ကို ခေါ်တယ်
  // const mark = 50;
  // if (mark >= 40) {
  //   console.log("failed"); // pass ဖြစ်ရမှာ ကိုယ်ဘာသာ fail ရေးမှားထားတာ...
  // } else {
  //   console.log("Passed");
  // }

  //! try{} , catch(){ } သုံးပြီး error ကို ပြမယ်
  // console.log("hello");
  // try {
  //   let x = 5;
  //   x();
  // } catch (error) {
  //   alert(error.message);
  //   app.append(error.stack);
  // }
  // finally{
  //   console.log("I'm finish");
  // }

  // console.log("San kyi tar");
  // const res1 = await fetch("https://fakestoreapi.com/products/1");
  // const data1 = await res1.json();
  // console.log(data1);
  // const res2 = await fetch("https://fakestoreapi.com/products/2");
  // const data2 = await res2.json();
  // console.log(data2);
  // const res3 = await fetch("https://fakestoreapi.com/products/3");
  // const data3 = await res3.json();
  // console.log(data3);
  // const res4 = await fetch("https://fakestoreapi.com/products/4");
  // const data4 = await res4.json();
  // console.log(data4);
  // fetch("https://fakestoreapi.com/products/1")
  //   .then((data) => data.text())
  //   .then((result) => console.log(JSON.parse(result)));
  //   fetch("https://fakestoreapi.com/products/2")
  //   .then((data) => data.text())
  //   .then((result) => console.log(JSON.parse(result)));
  //   fetch("https://fakestoreapi.com/products/3")
  //   .then((data) => data.text())
  //   .then((result) => console.log(JSON.parse(result)));
  //   fetch("https://fakestoreapi.com/products/4")
  //   .then((data) => data.text())
  //   .then((result) => console.log(JSON.parse(result)));
  const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const val = Math.floor(Math.random() * 10);
      console.log(val);
      if (val > 5) {
        resolve(val);
      } else {
        reject(val);
      }
    }, 2000);
  });
  p.then(
    function (x) {
      console.log("Success", x);
    },
    function (y) {
      console.log("fail", y);
    }
  );

  p.catch((e) => console.log(e));
  p.finally(() => console.log("I'm finish"));

  // fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //   fetch("https://fakestoreapi.com/products/2")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //   fetch("https://fakestoreapi.com/products/3")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //   fetch("https://fakestoreapi.com/products/4")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // console.log("U clicked fetch btn");
  // fetch("http://localhost:5000/tasks") //endpoint url
  //   .then((res) => res.text()) // then(callback func)
  //   .then((data) => {
  //     console.log(typeof data); //string type
  //     console.log(JSON.parse(data)); //string => json object
  //   });
  // fetch("http://localhost:5000/tasks")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //   fetch("http://localhost:5000/tasks/1") // by id:1
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //   fetch("http://localhost:5000/tasks/2") // id:2
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // fetch(
  //   "https://api.fastforex.io/fetch-all?api_key=43018c8e6e-3164522d16-slqodm"
  // )
  //   .then((res) => res.json())
  //   .then((rates) => console.log(rates));
  // fetch("http://localhost:5000/tasks")
  //   .then((data) => data.json())
  //   .then((el) => el.forEach((product) => console.log(product)));
};

fetchBtn.addEventListener("click", handleFetchBtn);
