## Async VS Defer
 - Async
   - The async attribute is used to indicate to the browser that the script file can be executed asynchronously. The HTML parser does not need to pause at the point it reaches the script tag to fetch and execute, the execution can happen whenever the script becomes ready after being fetched in parallel with the document parsing.
   - ```<script async src="script.js">```
   - This attribute is only available for externally located script files.

 - Defer
   - The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed.
   - ```<script defer src="script.js">```
   - Like an asynchronously loaded script, the file can be downloaded while the HTML document is still parsing. However, even if the file is fully downloaded long before the document is finished parsing, the script is not executed until the parsing is complete.