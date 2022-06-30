# Promises

## Example

this is the solution to w-4 test Q04.
```js
const doShortlyExpectingTruthy = function(callback, delay, data) {
  const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      let result = callback(data);

      if (!result) {
        reject("Falsy value retrieved");
      }

      if (result) {
        resolve(result);
      }
    }, delay);


  });

  return myPromise;
};
```