function isPalindrome(message) {
    let originalMsg = message;
    return message.split("").reverse().join("") === originalMsg ? true : false;
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('abcba'));