if (true) {

    const foo = "abc";

    if(true){

      console.log(foo);
    }
    foo = "xyz"; // TypeError: Assignment to constant variable. Can't be updated
  }