$(document).ready(function(){
    debugger;
    var input = prompt("Please enter a sentence.");

    var newStr = str1(input);
    alert(newStr);

    var reversedStr = str2(newStr);
    alert(reversedStr);

    var concatStr = str3(input);
    alert(concatStr);

    var concatNewStr = str4(input);
    alert(concatNewStr);

    var bonus = str5(concatNewStr);
    alert(bonus);

    // var bonus2 = str6(concatNewStr);
    // alert(bonus2);

});


//this function will take first and last letter of string and capitalize it, should return as a new string
function str1(string){
    var first = string.charAt(0).toUpperCase();
    var last = string.charAt(string.length-1).toUpperCase();
    return first + last;
}

//this function will reverse the order of a string
function str2(string){
    return string.charAt(string.length-1) + string.charAt(0);
}

//this function will  concatenate the original input from the prompt and the result of str2(str1)
function str3(string){
    return string+str2(str1(string));
}

//this function will find the length of the string, divide the length by two and find the character at that index and concatenate it before the original string. After the original string concatenate the return value of str2.
function str4(string){
    return string.charAt(Math.floor(string.length/2)) + string + str2(str1(string));
}

//this function will use the return value of str4 and reverse the string and return a new string
function str5(string){
    return string.split("").reverse().join("");
}

//this function will do the same as str5(), the only difference I'm going primitive with the for loop
// function str6(string){
//     var newString="";
//     for(int i=string.length-1;i>=0;i--){
//         newString+=string.charAt(i);
//     }
//     return newString;
// }
