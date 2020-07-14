//5. URLify a string
////    O(1)
function noSpace(value) {
    if (value === '') {
        return '';
    }
    if (value[0] == ' ') {
        return '%20' + noSpace(value.slice(1));
    }
    return value[0] + noSpace(value.slice(1));
}

//console.log(noSpace('tauhida parveen'));
//console.log(noSpace('www.thinkful.com /tauh ida parv een'));

//6. Filtering an array
function lessThanFive(numArray) {
    let lessThan = [];
    let item = null;
    if (numArray.length === 0) {
        return '';
    }

    if (numArray[0] < 5) {
        let result = lessThanFive(numArray.slice(1));
        item = numArray[0];
        lessThan.push(item);

        if (result.length != 0) {
            result.forEach(num => lessThan.push(num));
        }
    } else lessThanFive(numArray.slice(1));

    return lessThan;
}
//console.log(lessThanFive([1, 2, 3, 4, 5, 6, 1, 7, 8]));

//7. Max sum in the array - for sequence of contiguous nums
function sum(numArr) {
    //keep track of highest sum
    let highestSum = 0;

    for (let i = 0; i < numArr.length; i++) {
        for (let j = i; j < numArr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum = sum + numArr[k];
            }
            if (sum > highestSum) {
                highestSum = sum;
            }
        }
    }
    return highestSum;
}

//console.log(sum([4, 6, -3, 5, -2, 1]));
//output: should be 12

//8. Merge arrays
function merge(arr1, arr2) {
    let finalArr = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            finalArr.push(arr2.shift());
        } else {
            finalArr.push(arr1.shift());
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        finalArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        finalArr.push(arr2[i]);
    }

    return finalArr;
}
//console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//console.log(merge([9, 10, 11, 12], [2, 3, 5, 8, 9, 10]));
//output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

//9. Remove characters
function removeChar(value, char) {
    if (!value.length || !char.length) {
        return '';
    }

    if (char.includes(value[0])) {
        return '' + removeChar(value.slice(1), char);
    }

    return value[0] + removeChar(value.slice(1), char);
}

//console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
//Output: 'Bttl f th Vwls: Hw vs. Grzny'

// 10. Products
function findProd(array) {
    let sumArray = [];
    let sum = 1;

    for (let i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }

    for (let i = 0; i < array.length; i++) {
        sumArray.push(sum / array[i]);
    }
    return sumArray;
}

//console.log(findProd([1, 3, 9, 4]));
//Output:[108, 36, 12, 27]

// 11. 2D array
//input and output should be seperate arrays
//not modifying existing arrays or else everything will be 0
function deepCopy(arr) {
    let copy = [];
    arr.forEach(elem => {
        if (Array.isArray(elem)) {
            copy.push(deepCopy(elem));
        } else {
            copy.push(elem);
        }
    });
    return copy;
}

function alterArrayOnZero(array) {
    let newArr = deepCopy(array);

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (array[i][j] === 0) {
                let foundRow = i;
                let foundCol = j;

                for (let k = 0; k < newArr.length; k++) {
                    newArr[foundRow][k] = 0;
                    newArr[k][foundCol] = 0;
                }
            }
        }
    }

    return newArr;
}

let test = [
    [1, 2, 3, 4, 3],
    [5, 6, 17, 18, 47],
    [9, 10, 11, 12, 8],
    [28, 4, 22, 46, 7],
    [1, 23, 25, 27, 9],
];
let myArray = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
];
console.log(alterArrayOnZero(myArray));

//output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// 12. String rotation
function isARotation(string, str2) {
    const output = [];

    for (let i = 0; i < string.length; i++) {
        let remaining = string.slice(1);
        let newStr = ''.concat(remaining, string.charAt(0));
        output.push(newStr);
        string = newStr;
    }

    if (output.includes(str2)) {
        return true;
    } else return false;
}

//console.log(isARotation('amazon', 'azonma'));
//false
//console.log(isARotation('amazon', 'azonam'));
//true

//assign Big O for all functions
