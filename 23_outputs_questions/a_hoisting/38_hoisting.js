function foo() {
    let a = b = 0;
    a++;
    return a;
  }

  let ans = foo();
  console.log(ans);
  console.log(typeof ans);
  console.log('a type: ', typeof a);
  console.log('b type: ', typeof b);