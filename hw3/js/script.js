let a = +prompt("Enter the first number");
let calc = prompt("Enter math symbol");
let b = +prompt("Enter the second number");
let result = null;

switch (calc) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        alert("Invalid character entered, valid: +,-,*,/");
        break;
}

alert("The result is: " + result);

   