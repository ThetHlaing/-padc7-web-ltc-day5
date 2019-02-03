const obj = {
    myVar: 'foo',
    
    myFunc: () => { 
      console.log(this.myVar);
    }
  };

  const obj2 = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this.myVar);
    }
  };

  //const returnValueInstantly = 


  //const returnObjectInstantly = 
