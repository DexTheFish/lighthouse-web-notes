`runtime` is the sum of all elementary operations.
`aside:` use JavaScript's "Set" function to strip an array of duplicate elements.
google's example interview includes a great [demonstration](https://youtu.be/XKu_SEDAykw) of search algorithms.
## Example 1

We're going to write a function that accepts two parameters:
- An ordered array of numbers.
- A number.
This function should check if any two numbers in that array can be added together to equal the input number. Here's an algorithm:
```js
function arrayContainsSum(array, sum) {

  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    for (let ii = 0; ii < array.length; ii++) {

      const element2 = array[ii];

      if (element1 + element2 === sum) {
        return true;
      }
    }
  }
  return false;
}
```
This algorithm is crap. Below we have a much better one:
```js
function arrayContainsSum(array, sum) {
  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = element1 + element2;

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }

  return false;
}
```





