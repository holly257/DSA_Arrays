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
//in progress
//value returning is too high
function sum(numArr) {
    //keep track of highest sum
    let highestSum = 0;

    for (let i = 0; i < numArr.length; i++) {
        for (let j = i; j < numArr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum = sum + k;
                //console.log(sum, k)
                if (sum > highestSum) {
                    highestSum = sum;
                }
            }
        }
    }
    return highestSum;
}

//console.log(sum([4, 6, -3, 5, -2, 1]))

//8. Merge arrays
//in progress
//works if both arrays grow equally
function merge(arr1, arr2) {
    let finalArr = [];

    for (let i = 0; i < arr1.length; i++) {
        finalArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        finalArr.push(arr2[i]);
    }

    for (let j = 0; j < finalArr.length; j++) {
        let first = finalArr[j];
        let second = finalArr[j + 1];
        if (first > second) {
            finalArr[j] = second;
            finalArr[j + 1] = first;
        }
    }

    return finalArr;
}
//works
//console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//doesn't work
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

console.log(findProd([1, 3, 9, 4]));
//Output:[108, 36, 12, 27]

// 11. 2D array
// 12. String rotation

//assign Big O for all functions
