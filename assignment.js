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
        lessThan.push(item)

        if (result.length != 0) {
            result.forEach(num => lessThan.push(num));
        }
    } else lessThanFive(numArray.slice(1));

    return lessThan;
}

//console.log(lessThanFive([1, 2, 3, 4, 5, 6, 1, 7, 8]));

//7. Max sum in the array - for sequence of contiguous nums
//not what they were asking for
function sum(numArr) {
    //keep track of highest sum
    let highestSum = 0;
    
    //generate sequences 

    //need start loop
    //need end loop
    //third to loop through
    //- find sum of each
    
}

//console.log(sum([4, 6, -3, 5, -2, 1]))

//8. Merge arrays

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
// 11. 2D array
// 12. String rotation

//assign Big O for all functions