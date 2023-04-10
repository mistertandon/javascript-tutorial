var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // outer func:  this.foo = bar
    console.log("outer func:  self.foo = " + self.foo); // outer func:  self.foo = bar
    (function () {
      console.log("inner func:  this.foo = " + this.foo); // inner func:  this.foo = undefined
      console.log("inner func:  self.foo = " + self.foo); // inner func:  self.foo = bar
    })();
  },
};
myObject.func();

/**
 * In JavaScript, the value of the this keyword inside a function is determined by how the function is called.
 * When a function is called as a method of an object, this is bound to the object. However, when a function
 * is called without any context, this is bound to the global object (or undefined in strict mode).
 *
 * In the code example provided, the inner function is called as a regular function without any context,
 * so this is bound to the global object. This behavior is known as "default binding".
 *
 * To work around this behavior and maintain the correct value of this inside the inner function,
 * the code uses the self variable to capture the value of this in the outer function and then
 * use it inside the inner function. By doing this, the code ensures that the inner function
 * has access to the correct context even if it's called without any context.
 */
