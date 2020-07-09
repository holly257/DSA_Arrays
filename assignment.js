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
////    in progress
function lessThanFive(numArray) {
    let lessThan = [];
    let item = null;
    if (numArray.length === 0) {
        return '';
    }

    if (numArray[0] < 5) {
        let result = lessThanFive(numArray.slice(1));
        item = numArray[0];
    
        if (result.length != 0) {
            result.forEach(num => lessThan.push(num));
        }
    } else lessThanFive(numArray.slice(1));

    lessThan.push(item);
    return lessThan;
}

console.log(lessThanFive([1, 2, 3, 4, 5, 6, 1, 7, 8]));

//7. 
//not what they were asking for 
function sum(numArr) {
    let pos = 0;
    let neg = 0;

    numArr.forEach(num => {
        if (num > 0){
            pos = pos + num
            return pos;
        } else {
            neg = neg + num
            return neg;
        }
    })

    let sum = pos + neg
    return sum 
}

console.log(sum([4, 6, -3, 5, -2, 1]))

//8.
//9.
function removeChar(value, char) {
    if (value === '') {
        return '';
    }
    //in progress
    if (value[0] == ' ') {
        return '%20' + noSpace(value.slice(1));
    }
    return value[0] + noSpace(value.slice(1));
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))