let obj = {
   favoriteNumber : 33,
   favoriteColor  : 'blue'
};

if("favoriteNumber" in obj){
    console.log("The favoriteNumber key exsits!");
}
if("nothing" in obj){
    console.log("The nothing key exsits!");
}