//5. URLify a string
function noSpace(value){
    if(value === ''){
        return '';
    }
    if(value[0] == ' '){
        return '%20' + noSpace(value.slice(1))
    }
    return value[0] + noSpace(value.slice(1))
}

console.log(noSpace('tauhida parveen'))
console.log(noSpace('www.thinkful.com /tauh ida parv een'))

//6. Filtering an array