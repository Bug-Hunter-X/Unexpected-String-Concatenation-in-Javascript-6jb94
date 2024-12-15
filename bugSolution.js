```javascript
function myFunction(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else if (typeof a === 'string' || typeof b === 'string') {
    return String(a) + String(b); //String concatenation
  } else {
    return NaN; //Handle other cases appropriately
  }
}

console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(5, '5')); // Output: 55
console.log(myFunction('5','5')); // Output: 55
```