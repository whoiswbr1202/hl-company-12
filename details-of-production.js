function handleMinus() {
    var input = document.getElementById("amount");
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
}
function handlePlus() {
    var input = document.getElementById("amount");
    var value = parseInt(input.value);
    input.value = value + 1;
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("amount");
    input.value = "1";
});


// var currentPosition = 0;
// var totalProducts = document.querySelectorAll(".related-product-option").length;
// var productsContainer = document.querySelector(".product-container");
// var productWidth = document.querySelector(".related-product-option  ").offsetWidth;
// var containerWidth = productWidth * totalProducts;

// productsContainer.style.width = containerWidth + "px";

// function scrollLeft() {
//   if (currentPosition > 0) {
//     currentPosition -= productWidth;
//     productsContainer.style.transform = `translateX(-${currentPosition}px)`;
//   }
// }

// function scrollRight() {
//   if (currentPosition < containerWidth - (productWidth * 3)) {
//     currentPosition += productWidth;
//     productsContainer.style.transform = `translateX(-${currentPosition}px)`;
//   } else {
//     currentPosition = 0;
//     productsContainer.style.transform = `translateX(0)`;
//   }
// }
function scrollRight() {
    var productContainer = document.querySelector('.product-container');
    productContainer.classList.add('show-product-option-4');
  }
  
  function scrollLeft() {
    var productContainer = document.querySelector('.product-container');
    productContainer.classList.remove('show-product-option-4');
  }
  