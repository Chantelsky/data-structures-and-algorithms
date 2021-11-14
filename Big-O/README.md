Big O Cheat Sheet:
------------------------

## Big Os

* O(1) Constant - no loops
* O(log N) Logarithmic - usually searching algorithms have log(n) if they are sorted (binary search) (not on hash maps though)
* O(n) Linear - for loops while loops
* O(n*log(n)) Log Linear - sorting operations usually
* O(n^2) Quadratic - every element in a collection needs to be compared to every other element. Two nested loops
* O(2^N) Exponetial - recursive algorithms that solve a problem of size N
* O(n!) - you are adding a loop for every element.

**Iterating through half a collection is still O(n)**
**Two seperate collections: O(a + b)**

-What can cause time in a function?-
* Operations (+, -, * , /)
* Comparisons (<, > ==)
* Looping (for, while)
* Outside Function call (function())

--Rule Book--
1. Rule 1: Always worst case
2. Rule 2: Remove constants
3. Rule 3: Different inputs should have different variables. O(a + b). A and B arrays nested would be O(a*b)
    + for steps in order
    * for nested steps
Rule 4: Drop Non-dominant terms

--What causes space complexity--
* Variables
* Data Structures
* Function call
* Allocations

------------------------

##Types
1. Big O - Worst case

Ideal
* O(1) - Constant
* O (log n) - Logarithmic
* O(n) - Linear

**Acceptable**
* O(n * log n) - Log Linear

**Avoid**
* O(n^2) - Quadratic
* O(2^n) - Exponential
* O(n!) - Factorial
