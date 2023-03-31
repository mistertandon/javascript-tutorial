## Async VS Defer
 - Async

   - if the async attribute is present, then the scripts will be fetched in parallel to parsing and evaluated as soon as it is available (potentially before parsing completes). Since they are evaluated as soon as it is available, these scripts may execute in different order from the one they are added. Therefore, if mytest1.js is dependent on mytest0.js, the page may throw error when you try to call a function in mytest0.js from mytest1.js.
 - ```javascript
      <script src="/script/mytest0.js" async></script>
      <script src="/script/mytest1.js" async></script>
      <script src="/script/mytest2.js" async></script>
      <script>
        window.addEventListener('DOMContentLoaded', function(event){
          testit0();      // Might has 'testit0 is not defined' error
          testit1();
          testit2();
        });
      </script>
    ```

 - Defer
   - If the defer attribute is present, then the classic scripts will be fetched in parallel and evaluated when the page has finished parsing in the order they were added. So the functions defined in the javascript files loaded with defer attribute will only be available in the DOMContentLoaded event.
   - ```<script defer src="script.js">```