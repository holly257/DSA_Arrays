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

console.log(noSpace('tauhida parveen'));
console.log(noSpace('www.thinkful.com /tauh ida parv een'));

//6. Filtering an array
////    in progress
function lessThanFive(numArray) {
    let lessThan = [];

    if (numArray.length === 0) {
        return '';
    }
    console.log(numArray)
    if (numArray[0] < 5) {
        let result = lessThanFive(numArray.slice(1));
        console.log(result)
        //let item  = numArray[0]
        // lessThan.push(item)
        // console.log(lessThan)
        //return item

        if (result.length != 0) {
            result.forEach(num => lessThan.push(num));
        }
    } else lessThanFive(numArray.slice(1));
    return lessThan;
}

console.log(lessThanFive([1, 2, 3, 4, 5, 6, 1, 7, 8]));
