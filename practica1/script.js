const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

let currentOperand = "0";
let previousOperand = "";
let operator = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if (value === "clear") {
      currentOperand = "0";
      previousOperand = "";
      operator = "";
    } else if (value === "backspace") {
      currentOperand = currentOperand.toString().slice(0, -1) || "0";
    } else if (isNaN(value)) {
      if (value === "." && currentOperand.includes(".")) return;
      if (value === "=") {
        currentOperand = eval(`${previousOperand} ${operator} ${currentOperand}`);
        previousOperand = "";
        operator = "";
      } else {
        previousOperand = currentOperand;
        operator = value;
        currentOperand = "0";
      }
    } else {
      if (currentOperand === "0") {
        currentOperand = value;
      } else {
        currentOperand += value;
      }
    }
    display.textContent = currentOperand;
  });
});
