function showMessage() {
  const output = document.getElementById("output");
  output.innerHTML = "Button was clicked";
}

function calculatePrice(price) {
  return price * 0.15;
}

const TX = 0.15;//fix added

function calculatePrice(price) {
  return price * TX;
}

////////////////////////////////////////////////////

function updateOutputMessage() {
  const output = document.getElementById("output");
  output.innerHTML = "Button clicked";
}

function logIterations() {
  for (let i = 0; i<5; i++) {
    console.log("Iteration " +i);
  }
}

function calculateAndLogSum() {
  const result =sum(10,20);
  console.log("Sum result: " + result);
}

document.getElementById("clickMe").addEventListener("click",() => {
  updateOutputMessage();
  logIterations();
  calculateAndLogSum();
});

