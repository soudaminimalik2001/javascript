// asynchronous
// here we use setTimeout.setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.and its define how the asynchronous work 
const fun2 = () => {
    setTimeout(() =>{
        console.log("fun2 is starting");   
    },3000);
}
const fun1 = () => {
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is ending")
}
fun1()
{
    let x = 2;
    // console.log(x)
}
console.log(x)


// function myFun() {
//     var carName = "Volvo";   // Function Scope
//     // console.log(carName);
// }
// console.log(carName);
// myFun()