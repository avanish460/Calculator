alert("As you can see, there are three input fields:\n 1. Enter the first number in the field, such as 4, 5, etc.\n 2. Enter the second number, like 2 or 3, or 6 etc.\n 3. For the last input field, takes only operators are (+, -, *, /, %, *) Applying an operation to the above inputs.");

let a;
let b;
let ch;
let calculation;

var cal = document.getElementById("bttn");
cal.addEventListener("click", calcula);

function calcula() {
  a = document.getElementById("input1").value;
  b = document.getElementById("input2").value;
  ch = document.getElementById("input3").value;

  switch (ch) {
    case "+":
      calculation = parseInt(a) + parseInt(b);
      break;
    case "-":
      calculation = parseInt(a) - parseInt(b);
      break;
    case "*":
      calculation = parseInt(a) * parseInt(b);
      break;
    case "/":
      calculation = parseInt(a) / parseInt(b);
      break;
    case "%":
      calculation = parseInt(a) % parseInt(b);
      break;
    case "^":
      calculation = Math.pow(a, b);
      break;
    default:
      alert(
        "given operation in not belong to our operation please read the instruction carefully before calculation"
      );
      break;
  }
  document.getElementById("result").innerHTML = calculation;
}
