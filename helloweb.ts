let message: string = 'Hello Web';
document.body.innerHTML = message;


let myarr :(string | boolean)[];
myarr = ["Apple", "Orange", "Banana", true];

myarr.forEach(element => {
    console.log(element);
});
console.log("******************************************");

let myarr2 : Array<string>;
myarr2 = ["Abc" , "Wxy", "Xyz"];

myarr2.forEach(x => {
    console.log(x);
})
