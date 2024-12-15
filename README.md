# Unexpected String Concatenation in Javascript
This repository demonstrates a common error in Javascript related to type handling.  The `myFunction` attempts to add two numbers but concatenates due to implicit type coercion.
The solution shows how to use type checking or explicit type conversion to solve this issue. 

## Bug
The `bug.js` file contains a function that incorrectly concatenates strings instead of adding numbers.  The behavior is unexpected when one of the input arguments is a string.

## Solution
The `bugSolution.js` file provides corrected versions of the function which explicitly handle different types to perform either string concatenation or numerical addition depending on the input types.
