- Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes before the code is executed. However, it's important to note that only variable and function declarations are hoisted, not their assignments or initializations. 

- var variables are hoisted to the top of their scope and initialized with a value of undefined,

```javascript
  console.log(a); // undefined
  var a = 1;
```

> whereas let and const variables are also hoisted but not initialized with a value, resulting in a reference error if used before they are declared.

```javascript
  console.log(a); // ReferenceError: a is not defined
  let a = 1;
```

#### Temporal Dead Zone
> The temporal dead zone (TDZ) is a behavior in JavaScript where a variable declared with let or const is not accessible (or in other words, in a "dead zone") before it is initialized. This is because the variable is hoisted to the top of its block, but it is not assigned a value until its declaration statement is evaluated. Any attempt to access the variable before its declaration statement will result in a runtime error.