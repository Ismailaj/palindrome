const input = document.querySelector('input');

function reverseString(str){
    return str.split("").reverse().join("");
    //split() converts some string to an array while reverse() changes the order to reverse then join() merges back the resulting reverse(opposite of split)
}

function getInput(){
    const value = input.value;
    const reverse = reverseString(value);
    // alert(reverse)
    if (value === reverse){
        alert('PALINDROME');
    }
    else {
        alert('Not today!');
    }
    input.value = ("");
}