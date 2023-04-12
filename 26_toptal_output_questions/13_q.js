function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayHello = function () {
      // this is accessible
      console.log('Hello', this.name);
      function innerFunction() {
        // this refers to the global object
        console.log(this.age);
        console.log(this);
      }
      innerFunction(); 
   }
}
let x = new Person();
x.sayHello()
console.log("=========================================================");

function PersonWithArrowFunc() {
    this.name = 'Jack',
    this.age = 25,
    this.sayHello = function () {
      // this is accessible
      console.log('Hello', this.name);
      const innerFunction = () => {
        // this refers to the global object
        console.log(this.age); // 25
        console.log(this); // References Person 
      }
      innerFunction(); 
   }
}
let y = new PersonWithArrowFunc();
y.sayHello()