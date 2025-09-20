// let string="";
// let buttons = document.querySelectorAll('.buttons')
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target .innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value =string;
//         }else{
//             console.log( e.target)
//             string = string + e.target.innerHTML
//             document.querySelector('input').value=string;
//         }
//         })

//     })
 
let expr = "";                         // holds the expression
const display = document.getElementById("display");

// Attach clicks to ALL buttons
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => handle(btn.textContent.trim()));
});

function handle(value) {
  if (value === "=") {
    calculate();
    return;
  }
  if (value === "C") {
    expr = "";
    render();
    return;
  }
  // Append the pressed character
  expr += value;
  render();
}

function calculate() {
  try {
    // Evaluate the expression safely
    const result = eval(expr);         // your buttons use + - * % . digits
    expr = (result !== undefined) ? String(result) : "";
  } catch {
    expr = "";
    display.value = "Error";
    return;
  }
  render();
}

function render() {
  display.value = expr;
}
