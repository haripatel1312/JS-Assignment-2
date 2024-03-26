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
    calculatePrice() {
        let totalPrice = 0;
        const flavorOption = document.querySelector(`#flavor option[value='${this.flavor}']`);
        const baseOption = document.querySelector(`#base option[value='${this.base}']`);
        const toppingsOptions = this.toppings.map(topping => document.querySelector(`#toppings option[value='${topping}']`));
      
        if (flavorOption && baseOption && toppingsOptions.every(option => option)) {
          totalPrice += parseFloat(flavorOption.getAttribute('data-price')) || 0;
          totalPrice += parseFloat(baseOption.getAttribute('data-price')) || 0;
          toppingsOptions.forEach(option => {
            totalPrice += parseFloat(option.getAttribute('data-price')) || 0;
          });
        } else {
          console.error("Error: Some HTML elements not found or null values in smoothie properties.");
        }
        return totalPrice.toFixed(2);
      }
      
  }
  function displaySmoothie(smoothie) {
    const smoothieOutput = document.getElementById("smoothieOutput");
    smoothieOutput.innerHTML = `
      <h2>Your Smoothie:</h2>
      <p>Flavor: ${smoothie.flavor} - $${parseFloat(document.querySelector(`#flavor option[value='${smoothie.flavor}']`).getAttribute('data-price')).toFixed(2)}</p>
      <p>Base: ${smoothie.base} - $${parseFloat(document.querySelector(`#base option[value='${smoothie.base}']`).getAttribute('data-price')).toFixed(2)}</p>
      <p>Toppings: ${smoothie.toppings.map(topping => `${topping} - $${parseFloat(document.querySelector(`#toppings option[value='${topping}']`).getAttribute('data-price')).toFixed(2)}`).join(', ')}</p>
    `;
    const bill = document.getElementById("bill");
    const price = smoothie.calculatePrice();
    bill.innerHTML = `
      <h2>Bill:</h2>
      <p>Total Price: $${price}</p>
    `;
    const smoothieImage = document.getElementById("smoothieImage");
    smoothieImage.innerHTML = `<img src="Images/image.webp" alt="Smoothie" width="200">`; 
}


  