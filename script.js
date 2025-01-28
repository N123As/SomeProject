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
//fix added

document.getElementById("clickMe").addEventListener("click",() => 
{
  const output = document.getElementById("output");
  output.innerHTML = "Button clicked!";
  for (let i = 0; i<5; i++) {
    console.log("Iteration " +i);
  }
  const result =sum(10,20);
  console.log("Sum result: " + result);
});

