## Should I use Promises or Async-Await

### Thumb Rules for using Promises

 - Use promises whenever you are using asynchronous or blocking code.
 - resolve maps to then and reject maps to catch for all practical purposes.
 - Make sure to write both .catch and .then methods for all the promises.
 - If something needs to be done in both the cases use .finally


 ### Thumb rules for using async and await
 
 - async functions returns a promise.
 - async functions use an implicit Promise to return its result. Even if you don’t return a promise explicitly async function makes sure that your code is passed through a promise.
 - await blocks the code execution within the async function.
 - There can be multiple await statements within a single async function.
 - When using async await make sure to use try catch for error handling.
 - Be extra careful when using await within loops and iterators. You might fall into the trap of writing sequentially executing code when it could have been easily done in parallel.
 - await is always for a single promise.