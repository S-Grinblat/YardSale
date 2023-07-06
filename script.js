const cartIcon = document.getElementById('icon-cart');
let cartNotification = document.querySelector('.header__cart--notification');
const cartMenu = document.querySelector('.cart');
const closeCart = document.getElementById('close-cart');
const logoMenu = document.querySelector('.icon_menu');
const closeMenu = document.querySelector('.close-nav');
const menuLinks = document.querySelector('.nav-menu-mobile');
const shopContainer = document.querySelector('.shop');
const addCart = document.querySelector('.add-cart');
const shopContent = document.querySelector('.shop-content');
const containerDescription = document.querySelector('.description-container');
const description = document.querySelectorAll('.descripiton-details');
const arrowDown = document.querySelectorAll('.arrowDown');
const arrowUp = document.querySelectorAll('.arrowUp');
let userInputNumber = 1;
let totalInputNumber = userInputNumber;


logoMenu.addEventListener('click', () => {
  menuLinks.style.display = 'flex';
  shopContainer.style.display = 'none';
});
closeMenu.addEventListener('click', () => {
  menuLinks.style.display = 'none';
  shopContainer.style.display = 'block';
});
cartIcon.addEventListener('click', () => {
  cartMenu.classList.add('active');
  menuLinks.style.display = 'none';
});
closeCart.addEventListener('click', () => {
  cartMenu.classList.remove('active');
})

arrowDown.forEach(function(openDescription, index) {
  openDescription.addEventListener('click', function() {
    if(index < description.length) {
      description[index].style.display = 'block';
      arrowUp[index].style.display = 'block';
      arrowDown[index].style.display = 'none';
    }
  })
})
arrowUp.forEach(function(closeDescription, item) {
  closeDescription.addEventListener('click', function() {
    if(item < description.length) {
      description[item].style.display = 'none';
      arrowUp[item].style.display = 'none';
      arrowDown[item].style.display = 'block';
    }
  })
})

if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready) 
} else {
  ready();
}

function ready() {
  let removeCartBtn = document.getElementsByClassName('cart-remove');
  console.log(removeCartBtn);
  for(let r = 0; r < removeCartBtn.length; r++) {
    let button = removeCartBtn[r]
    button.addEventListener('click', removeCartItem);
  }
  let quantityInputs = document.getElementsByClassName('cart-quantity');
  for(let r = 0; r < quantityInputs.length; r++) {
    let input = quantityInputs[r];
    input.addEventListener('change', quantityChanged);
  }
  let addCart = document.getElementsByClassName('add-cart');
  for(let r = 0; r< addCart.length; r++) {
    let button = addCart[r];
    button.addEventListener('click', addCartClicked);
    function addProduct() {
      shopContent.childNodes.forEach((addCart) => {
        addCart.addEventListener('click', () => {
          totalInputNumber ++ ;
        })
      })
    }
  }
  document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
  addProduct()
}

function buyButtonClicked() {
  let cartContent = document.getElementsByClassName('cart-content')[0];
  while(cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  let input = event.target ;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
  updateTotal();
}

function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  let price = shopProducts.getElementsByClassName('price')[0].innerText;
  let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  cartNotification.innerText = totalInputNumber;
  cartNotification.style.display = 'block';
  addProductToCart(title, price, productImg);
  updateTotal();
}

function addProductToCart(title, price, productImg){
  let cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  let cartItems = document.getElementsByClassName('cart-content')[0];
  let cartItemsName = cartItems.getElementsByClassName('cart-product-title');
  for(let r = 0; r < cartItemsName.length; r++) {
    if(cartItemsName[r].innerText == title) {
      return;
    }
  }
  let cartBoxContent = `<img src="${productImg}" alt="product" class="cart-img">
  <div class="details-box">
    <h3 class="cart-product-title">${title}</h3>
    <span class="cart-price"> ${price} </span>
    <input type="number" value="1" class="cart-quantity" placeholder="0">
  </div>
  <i class='bx bxs-trash-alt cart-remove'></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
  cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

function updateTotal() {
  let cartContent = document.getElementsByClassName('cart-content')[0];
  let cartBoxes = cartContent.getElementsByClassName('cart-box');
  let total = 0;
  for(let r = 0; r < cartBoxes.length; r++) {
    let cartBox = cartBoxes[r];
    let priceElement = cartBox.getElementsByClassName('cart-price')[0];
    let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    let price = parseFloat(priceElement.innerText.replace('$', ''));
    let quantity = quantityElement.value;
    total = total + (price * quantity);
  }
    total = Math.round(total * 100 / 100);
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}