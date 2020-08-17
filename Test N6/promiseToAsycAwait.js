/**
 * Descriptions for tasks N2 and N3.
 * 
 * Description for task N2:
 * There is function foo which accpets argument cb, which in this case
 * is a function (val = 'hello') => {console.log(val)}. The function foo
 * returns a call to setTimeout function, which has to execute js code/function
 * provided as a first argument and execute it after the time which is the second
 * argument, which in this case is 1000ms, so the result will be "available"
 * after 1000ms or 1s. The default value for the val is set to 'hello', but since
 * 'bye' string is passed as an argument in bind method here val is set to 'bye'.
 * So the call for foo function with another function as an argument will console log 
 * 'bye' after 1000 ms.
 * 
 * Description for task N3:
 * It is known that setTimeout functon returns some number which indicates the timer id.
 * In this example the call for function foo is console logged. In the setTimeout function
 * as first argument a function is provided which returns a string, and also there is no time period
 * specified, so the function will execute immediately, but it does not have effect here. As setTimeout returns
 * some number so the result for call of function foo() will be that number and that number
 * will be printed. As it is a random number the answer is some number.  
 */


 async function logFetch (url) {
     try {
        let response = await fetch (url);
        let resText = await response.text();
        console.log(resText.value);
     } catch (error) {
        console.log('fetch failed', error)
     }
 }