function showMessage() {
  const output = document.getElementById("output");
  output.innerHTML = "Button was clicked";
}

function calculatePrice(price) {
  return price * 0.15;
}

function sum(a, b) {
   const x = a + b;//no way X
  return x;
}

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

