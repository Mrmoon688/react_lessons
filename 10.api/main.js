import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = () => {
  console.log("U clicked fetch btn");
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

  fetch("https://fakestoreapi.com/products/categories")
    .then((data) => data.json())
    .then((category) => console.log(category));
};
fetchBtn.addEventListener("click", handleFetchBtn);
