// Fetch and save the data
const products = [];
let productsHtml = ''

fetch('./backend/products.json')
  .then(response => response.json())
  .then(data => {
    const products = data;
    productsHtml = printLoop(products);
    document.querySelector('.js-product-grid').innerHTML = productsHtml;
    addToCart()
  });


  // Generate the HTML 
const printLoop = function(products) {
    let generateHtml = '';
    let quantityHtml = ''
    products.forEach(element => {
        quantityHtml = getQuantityHtml(element.quantity);
        generateHtml = generateHtml +  `
    <div class="product-card">
      <img src="${element.image}">
      <div class="product-name">${element.name}</div>
      <div class="product-price">$${((element.priceCents)/100).toFixed(2)}</div>
      <div class="rating">
        <img src="${element.rating.image}" alt="${element.rating.stars}">
      <label for="quantity">Quantity:</label>
      <select id="quantity" name="quantity" class="js-quantity">
      ${quantityHtml}
      </select>
      </div>
      <button class="add-to-cart js-add-to-cart" 
      data-product-name="${element.name}">
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
    const productName = button.dataset.productName;
    ifProductAlreadyInList(productName)
  } )}) 
}


var getQuantityHtml = function(quantity) {
  let generatedHtml = ''
  for (let i = 1 ; i <= quantity ; i++ ){
    generatedHtml += `<option class="js-product-quantity" value="${i}">${i}</option>`
  }
  return generatedHtml;
}

var ifProductAlreadyInList = function(productName) {
  let found = false;

  cart.forEach(element => {
    if (element.productName === productName) {
      element.productQuantity += 1;
      found = true;
    }
  });

  if (!found) {
    cart.push({
      productName: productName,
      productQuantity: 1
    });
  }
  console.log(cart);
  return cart;
}