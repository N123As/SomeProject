function showMessage(message) {
  document.getElementById("output").innerHTML = message;
}

const calculatePrice = (price) => price * 0.15;

function sum(a, b) {
  return a + b;
}

document.getElementById("clickMe").addEventListener("click", () => {
  showMessage("Button clicked!");

  for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
  }

  console.log(`Sum result: ${sum(10, 20)}`);
});
