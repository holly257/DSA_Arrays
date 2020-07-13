# Working With Arrays

1. Implement an Array class from scratch.
2. Explore the push() method
    - What is the length, capacity, and memory(ptr) address of your array?
        - Array {length: 1, \_capacity: 3, ptr: 0}
    - Add the following and then print the array. What is the length, capacity and memory address of your array?
        - arr.push(5);
            - Array {length: 2, \_capacity: 3, ptr: 0}
        - arr.push(15);
            - Array {length: 3, \_capacity: 3, ptr: 0}
        - arr.push(19);
            - Array {length: 4, \_capacity: 12, ptr: 3}
        - arr.push(45);
            - Array {length: 5, \_capacity: 12, ptr: 3}
        - arr.push(10);
            - Array {length: 6, \_capacity: 12, ptr: 3}
    - Explain the result of your program after adding the new lines of code.
        - For the second and third item added, they are added to the aditional empty spaces privously allocated when the array was created - since the size ratio is set at three. Once the fourth item gets added, the resize function is triggered. This changes the ptr(memory address) and the capacity. The new capacity is 12, since the function takes the old ptr (0) and adds the value of the size being passed in (the current length + 1 _ the size_ratio) - the current length is 3 + 1 _ a size ratio of #, gives us a new capacity of 12. The new memory addess changes when the value of the head (0) gets added to the new size (3) giving us a memory addess of 3.
3. Exploring the pop() method
    - Add the following in the main function and then print the array:
        - arr.pop();
        - arr.pop();
        - arr.pop();
    - What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
        - Before adding any .pop() methods, the array is Array {length: 6, \_capacity: 12, ptr: 3}
        - Adding each subsequent pop method, decreases the length by one, but it does not affect the capacity or the ptr. This is brecuase it gets the value of the array length -1.
4. Understanding more about how arrays work
    - Print the 1st item in the array arr.
        - arr.get(0);
    - Empty the array and add just 1 item: arr.push("tauhida");
    - Print this 1 item that you just added. What is the result? Can you explain your result?
        - The result was NaN since I was trying to return a string.
    - What is the purpose of the \_resize() function in your Array class?
        - So that each time an item needs to be added, the size of the array doesn't need to be resized each time - wasting resources. Using the resize funciton, it allows us to check when there is no empty space remaining in the capacity of the array, and then a new, longer space, in memory before adding a new value. We are not able to add a new value if there is not a capacity for it, since there are likely other items (not in our array) that are stored contiguously, after the end of our array.
5. URLify a string
    - Replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20
6. Filtering an array
    - Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 
    - DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
9. Remove characters
    - Write an algorithm that deletes given characters from a string. 
    - For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
    - Do not use Javascript's filter, split, or join methods.
10. Products
    - Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. 
    - Input:[1, 3, 9, 4]
    - Output:[108, 36, 12, 27]



#### Not completed yet:
7. Max sum in the array
8. Merge arrays

#### Not Started:
11. 2D array
12. String rotation