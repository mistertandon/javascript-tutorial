For more information kindly refere https://javascript.info/prototype-inheritance#prototype

> In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

> When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

One of them is to use the special name __proto__, like this:

```javascript
  let animal = {
    eats: truebbb
  };
  let rabbit = {
    jumps: true
  };

  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
```

Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

For instance:

```javascript
  let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };

  rabbit.__proto__ = animal; // (*)

  // we can find both properties in rabbit now:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true
```

> Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

#### There are only two limitations:

 - The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
 - The value of __proto__ can be either an object or null. Other types are ignored