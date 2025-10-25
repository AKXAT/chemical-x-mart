// Fetch and save the data
const products = [];
let productsHtml = ''

fetch('./backend/products.json')
  .then(response => response.json())
  .then(data => {
    const products = data;
    productsHtml = printLoop(products);
    document.querySelector('.js-product-grid').innerHTML = productsHtml;
    addToCart();
  });


  // Generate the HTML 
const printLoop = function(products) {
    let generateHtml = '';
    products.forEach(element => {
        generateHtml = generateHtml +  `
    <div class="product-card">
      <img src="${element.image}">
      <div class="product-name">${element.name}</div>
      <div class="product-price">$${((element.priceCents)/100).toFixed(2)}</div>
      <div class="rating">
        <img src="${element.rating.image}" alt="${element.rating.stars}">
      <label for="quantity">Quantity:</label>
      <select id="quantity" name="quantity" class="js-quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      <button class="add-to-cart js-add-to-cart">
      Add to Cart
      </button>
    </div>
        `;
    });
    return generateHtml;
}

 
// Update the DOM 

var addToCart = function() {
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {button.addEventListener('click',() => {
    alert("test")
  } )}) 
}