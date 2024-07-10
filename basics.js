// const person = [
//     {name: "Dhananjay"},
//     {name: "Shubham"},
// ]

// for(let user of person){
//     console.log(user.name);
// } 

// Async Code
// Normal Async Operation
// const fetchData = (callBack) => {
//     setTimeout(() => {
//         callBack("Dhananjay");
//     }, 1500)
// }

// setTimeout(() => {
//     console.log("Rakshe");
//      fetchData (text => {
//         console.log(text);
//     })
// }, 2000)

// console.log("Hi");

// Promise Async Operation
// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Dhananjay");
//     }, 1500)   
//     })
//    return promise;
// }

// setTimeout(() => {
//     console.log("Timer is done!");
//      fetchData()
//      .then( data => {
//         console.log(data);
//         return fetchData();
//      })
//      .then( data2 => {
//         console.log(data2);
//      })
// }, 2000)

// console.log("Hi");

// Node.Js Basics

 