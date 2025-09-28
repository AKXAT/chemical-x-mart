// Fetch and save the data
const products = [];
let productsHtml = ''

fetch('./backend/products.json')
  .then(response => response.json())
  .then(data => {
    const products = data;
    productsHtml = printLoop(products);
    document.querySelector('.js-product-grid').innerHTML = productsHtml;
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
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
        `;
    });
    return generateHtml;
}

// Update the DOM 

