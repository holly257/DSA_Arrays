import memory from './memory.js';

const newMem = new memory();

class Array {
    //initializes values for new array
    constructor() {
        //starts array as empty
        this.length = 0;
        //capacity will be value for length of items in array + any empty spaces
        this._capacity = 0;
        //allocates the space for the length of new array, as long as there is room in memory
        this.ptr = newMem.allocate(this.length);
    }

    //pushes value to new array
    push(value) {
        //if the length is greater than the capacity currently then resize
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        //otherwise, set the new array length and the values
        newMem.set(this.ptr + this.length, value);
        //increase the length counter
        this.length++;
    }

    //if it needs to be resized
    _resize(size) {
        //copy the old pointer
        const oldPtr = this.ptr;
        //create more space for the new size
        this.ptr = newMem.allocate(size);
        //if there is not space, throw an error
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        //copy the old array values, starting at the pointer, and add the additional length needed?
        newMem.copy(this.ptr, oldPtr, this.length);
        //empty the old memory space
        newMem.free(oldPtr);
        //increase the capacity value to the new capacity
        this._capacity = size;
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = newMem.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return newMem.get(this.ptr + index);
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        newMem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        newMem.set(this.ptr + index, value);
        this.length++;
    }
}

function main() {
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push('Tauhida');
    // arr.push(5);
    // arr.push(15);
    // arr.push(19);
    // arr.push(45);
    // arr.push(10);

    // arr.pop();
    // arr.pop();
    // arr.pop();
    // arr.pop();
    // arr.pop();

    arr.get(0)

    return arr.get(0);
}

console.log(main());
