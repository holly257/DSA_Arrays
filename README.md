# Working With Arrays

1. Implement an Array class from scratch.
2. Explore the push() method
    * What is the length, capacity, and memory(ptr) address of your array?
        * Array {length: 1, _capacity: 3, ptr: 0}
    * Add the following and then print the array. What is the length, capacity and memory address of your array? 
        * arr.push(5);
            * Array {length: 2, _capacity: 3, ptr: 0}
        * arr.push(15);
            * Array {length: 3, _capacity: 3, ptr: 0}
        * arr.push(19);
            * Array {length: 4, _capacity: 12, ptr: 3}
        * arr.push(45);
            * Array {length: 5, _capacity: 12, ptr: 3}
        * arr.push(10);
            * Array {length: 6, _capacity: 12, ptr: 3}
    * Explain the result of your program after adding the new lines of code.
        * For the second and third item added, they are added to the aditional empty spaces privously allocated when the array was created - since the size ratio is set at three. Once the fourth item gets added, the resize function is triggered. This changes the ptr(memory address) and the capacity. The new capacity is 12, since the function takes the old ptr (0) and adds the value of the size being passed in (the current length + 1 * the size_ratio) - the current length is 3 + 1 * a size ratio of #, gives us a new capacity of 12. The new memory addess changes when the value of the head (0) gets added to the new size (3) giving us a memory addess of 3. 
3. Exploring the pop() method
    * Add the following in the main function and then print the array:
        * arr.pop();
        * arr.pop();
        * arr.pop();
    * What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
        * Before adding any .pop() methods, the array is Array {length: 6, _capacity: 12, ptr: 3}
        * Adding each subsequent pop method, decreases the length by one, but it does not affect the capacity or the ptr. This is brecuase it gets the value of the array length -1.