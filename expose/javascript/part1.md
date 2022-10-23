# Lab 4 Expose JavaScript Part 1

1. Line 9 prints 'values added: 20'.

2. Line 13 prints 'final result: 20'.

3. Lin 9 prints 'values added: 20'.

4. Line 13 returns an error, because the code on line 13 is outside the scope of variable result, since result was declared with the 'let' keyword.

5. The code returns an error because result is a constant. When result is first declared, its value is set to zero. Therefore, because result is a constant, it's not allowed to change its value from zero. So one line 7, when result is attempted to be set to the sum of num1 and num2, an error is returned because result's value is not allowed to be changed.

6. The code returns an error of the issue regarding line 7 that was mentioned in the answer to question 5 given above. However, even if result's value wasn't changed, the code would've still returned an error on line 13 because the line is outside the scope of variable result, since declaring result a constant gave it the same scope as 'let'.