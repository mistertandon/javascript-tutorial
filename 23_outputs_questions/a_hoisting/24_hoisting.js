if (true) {

    const foo = "abc";

    if(true){

      console.log(foo); // abc
    }
    foo = "xyz"; // TypeError: Assignment to constant variable. Can't be updated
  }