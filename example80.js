let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
var fibArray = nestedData.innerData.numberData.fibonnaci
  for(var i =0; i<fibArray.length; i++){
    if(fibArray[i]%2===0){
      console.log(fibArray[i])
    }
  }