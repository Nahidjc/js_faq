function addNumbers(num1, ...num2) {
    console.log(num2);
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);

    }
    return num1 + num2[0];

}
var result = addNumbers(3, 4, 6, 2, 8, 9);
console.log("result: ", result);