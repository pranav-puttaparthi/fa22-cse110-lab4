# Lab 4 Expose JavaScript Part 2

1. On line 12, the length of the prices array is logged to the console. This is because variable i was declared with the 'var' keyword, meaning that its scope is the entirety of function discountPrices. The for-loop will be iterated through three times, since the prices array has three numbers within it. Only when variable i is greater than or equal to the length of the prices array will the loop no longer be iterated through. In this case, that's when variable i is equal to 3, which is the exact length of the prices array. So when line 12 is reached, variable i equals 3. So that's the number that gets logged to the console.

2. On line 13, the unrounded discounted price of the last full price in the prices array is logged to the console. As already established, the for-loop is iterated through three times, since that's the number of prices in the prices array. discountedPrice is declared with the 'var' keyword, so its scope is the entire function. As for discountedPrice's value, it changes for each iteration of the for-loop. On the last iteration of the loop, discountedPrice's value gets changed to the last full price in the array, 300, multiplied by the discount, 0.5. So when the loop is exited, discountedPrice has the value of 300 * 0.5 = 150. So that's the number that gets logged to the console.

3. On line 14, the final rounded discounted price of the last full price in the prices array is logged to the console. As already established, the for-loop is iterated through three times, since that's the number of prices in the prices array. finalPrice is declared with the 'var' keyword, but even if it was declared with the 'let' keyword, finalPrice was actually declared at the beginning of the function outside of the loop, so its scope would be the entire function regardless. As for finalPrice's value, it changes for each iteration of the for-loop. On the last iteration of the loop, finalPrice's value gets changed to discountedPrice, whose current value is 150, multiplied by 100, which makes their product 15000, and then its product is divided by 100, which means finalPrice is set to 150. So that's the number that gets logged to the console.
   
4. When the function discountedPrices starts, discounted is declared as an empty array with the 'var' keyword, giving it the scope of the entire function. With each iteration of the loop, a finalPrice value is pushed to the discounted array. So since discounted is what's returned, that means the function discountedPrices returns an array of all the final rounded discounted prices in the order that they were given in the prices array put in as a parameter. 100 * 0.5 = 50, 200 * 0.5 = 100, and 300 * 0.5 = 150, so the array that gets returned by the function is \[50, 100, 150\].

5. The code causes an error. Variable i is declared with the 'let' keyword, meaning its scope is the for-loop itself. So on line 12, variable i no longer exists, so its value can't be logged to the console here. So line 12 causes the error.

6. The code causes an error. Variable discountedPrice is declared with the 'let' keyword, so its scope is the entirety of the for-loop itself. So on line 13, variable discountedPrice no longer exists, so its value can't be logged to the console here. So line 13 causes the error.

7. On line 14, the final rounded discounted price of the last full price in the prices array is logged to the console. As already established, the for-loop is iterated through three times, since that's the number of prices in the prices array. finalPrice is declared with the 'let' keyword, but it's actually declared at the beginning of the function outside of the loop, so its scope is still the entire function. As for finalPrice's value, it changes for each iteration of the for-loop. On the last iteration of the loop, finalPrice's value gets changed to dscountedPrice, whose current value is 150, multiplied by 100, which makes their product 15000, and then its product is divided by 100, which means finalPrice is set to 150. So that's the number that gets logged to the console.

8. When the function discountedPrices starts, discounted is declared as an empty array with the 'let' keyword, which gives it the scope of the entire function regardless. With each iteration of the loop, a finalPrice value is pushed to the discounted array. So since discounted is what's returned, that means the function discountedPrices returns an array of all the final rounded discounted prices in the order that they were given in the prices array put in as a parameter. 100 * 0.5 = 50, 200 * 0.5 = 100, and 300 * 0.5 = 150, so the array that gets returned by the function is \[50, 100, 150\].

9. The code causes an error. Variable i is declared with the 'let' keyword, meaning its scope is the entirety of the for-loop itself. So on line 13, variable discountedPrice no longer exists, so its value can't be logged to the console here. As for the values pushed to discountedPrice, which is created upon each iteration of the loop and declared to be a constant, even though new values were pushed into the array, the constant discountedPrice was never actually reassigned to a new value. discountedPrice was always assigned to the same array. It's just the values within the array that were changed. So line 8 wouldn't cause any errors. But on line 11, variable i no longer exists, so its value can't be logged to the console here. So line 11 causes the error.

10. On line 12, the length of the prices array passed in as a parameter is logged to the console. Variable length is declared to be a const keyword and assigned to the length of the prices array passed in as a parameter, but nowhere in the rest of the code is variable length reassigned at all. So when line 12 is reached, length is unchanged, and so the length of the prices array passed in as a parameter, which is 3, is logged to the console.

11. when the function discountedPrices starts, discounted is declared as an empty array with the 'const' keyword, giving it the scope of the entire function. From there, numbered values get pushed into the array assigned to discounted, one numbered value per iteration of the loop. However, the variable discounted itself is never reassigned to any new value, so the pushing of these numbered values doesn't cause any error. So since discounted is what's returned, that means the function discountedPrices returns an array of all the final rounded discounted prices in the order that they were given in the prices array put in as a parameter. 100 * 0.5 = 50, 200 * 0.5 = 100, and 300 * 0.5 = 150, so the array that gets returned by the function is \[50, 100, 150\].

12. A. The notation for accessing the value of the name property in the student object is student.name.
    
    B. The notation for accessing the value of the Grad Year property in the student object is student\['Grad Year'\].

    C. We call the function for the greeting property in the student object like this: student.greeting().

    D. The notation for accessing the name property of the object in the Favorite Teacher property of the student is this: student\['Favorite Teacher'\].name.

    E. The notation for accessing the index zero in the array of the courseLoad property of the student object is this: student.courseLoad\[0\].

13. A. The output of '3' + 2 is '32' because 2 maps to its exact string representation, and so '3' and '2' get concatenated together to output '32'.

    B. The output of '3' - 2 is 1 because '3' maps to its integer representation, 3, and so 2 is subtracted from 3 to output 1.

    C. The output of 3 + null is 3 because null gets mapped to its integer representation, which is 0. So 3 + 0 outputs 3.

    D. The output of '3' + null is '3null' because null gets mapped to 'null'. So '3' and 'null' get concatenated together to output '3null'.

    E. The output of true + 3 is 4 because true gets mapped to its integer representation, which is 1. So 1 + 3 outputs 4.

    F. The output of false + null is 0 because both false and null get mapped to their integer representations, which are both 0. So 0 + 0 outputs 0.

    G. The output of '3' + undefined is '3undefined' because undefined gets mapped to 'undefined'. So '3' and 'undefined' get concatenated together to output '3undefined'.

    H. The output of '3' - undefined is NaN because '3' gets mapped to its integer representation, which is 3, and undefined gets mapped to its integer representation, which is NaN. So 3 - NaN outputs NaN.

14. A. The output of '2' > 1 is true, because '2' gets mapped to its integer representation, which is 2, and 2 is greater than 1, so true is outputted.

    B. The output of '2' < '12' is false, because the less than symbol < string-compares '2' and '12'. In terms of string comparison, '12' is less than '2', so the condition actually turns out to be false.

    C. The output of 2 == '2' is true, because '2' gets mapped to its integer representation, which is 2, before the comparison is made. 2 is the same as 2, so the condition is in fact true.

    D. The output of 2 === '2' is false. Since the === operator is used, no type conversions are made. Therefore, 2 is not the same as '2', so the condition is in fact false.

    E. The output of true == 2 is false, because true gets mapped to its integer representation, which is 1, before the comparison is made. 1 is not equal to 2, so the condition is in fact false.

    F. The output of true === Boolean(2) is true. 2 is a nonzero value, so Boolean(2) is actually true. true is the same value as true, with the same datatype and everything, so that makes the condition true.

15. When two values are compared with the == operator, any and all necessary type conversions are made before the comparison itself is done. However, if the two values are compared with the === operator, no such type conversions are made. So the values, data types included, are checked for equality.

16. (see JS file)

17. modifyArray is called with two parameters: the array [1, 2, 3] and the function doSomething. First, the constant newArr is created and set assigned to an empty array. The next for-loop iterates through each number of the array passed in as a parameter. For each number of the array, the function doSomething is called with that number passed in as a parameter, and the number that's outputed is pushed to newArr. Since newArr is never reassigned to another array, and only the array it's assigned to is modified, no error is returned because of this. The output of doSomething(1) is 2, the output of doSomething(2) is 4, and the output of doSomething(3) is 6. So the numbers 2, 4, and 6 are pushed into the array assigned to newArr in that order. Then newArr is returned. So the result of the function call is the array \[2, 4, 6\].

18. (see JS file)

19. 1
    4
    3
    2
