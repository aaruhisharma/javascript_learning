let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "shh!";

if(firstvariable){
    console.log("first");
}
else if(firstvariable||secondvariable){
    console.log("second")
}
else if(firstvariable||thirdvariable){
    console.log("third")
}
else{
    console.log("fourth");
}