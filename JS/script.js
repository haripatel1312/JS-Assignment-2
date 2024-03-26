function createSmoothie() {
    const flavor = document.getElementById("flavor").value;
    const base = document.getElementById("base").value;
    const toppings = [...document.getElementById("toppings").selectedOptions].map(option => option.value);
  
    const smoothie = new Smoothie(flavor, base, toppings);
    displaySmoothie(smoothie);
  }
  
  class Smoothie {
    constructor(flavor, base, toppings) {
      this.flavor = flavor;
      this.base = base;
      this.toppings = toppings;
    }
  }
  x
  function displaySmoothie(smoothie) {
    const smoothieOutput = document.getElementById("smoothieOutput");
    smoothieOutput.innerHTML = `
      <h2>Your Smoothie:</h2>
      <p>Flavor: ${smoothie.flavor}</p>
      <p>Base: ${smoothie.base}</p>
      <p>Toppings: ${smoothie.toppings.join(', ')}</p>
    `;
  }
  