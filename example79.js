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


  for (var i = 0; i<nestedData.innerData.numberData.primeNumbers.length; i++)
  {
    console.log(nestedData.innerData.numberData.primeNumbers[i]);
  }