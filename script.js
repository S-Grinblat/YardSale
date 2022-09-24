const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productCarritoDetail = document.querySelector('.product-detail-carrito');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const arrowClose = document.querySelector('.arrow-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeOpenProductDetailAside);
arrowClose.addEventListener('click', toggleCarritoAside)
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productCarritoDetail.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productCarritoDetail.classList.add('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productCarritoDetail.classList.add('inactive');
}

function openProductDetailAside() {
    productCarritoDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function closeOpenProductDetailAside() {
    productCarritoDetail.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

const productList = [];
productList.push({
    name: "BIKE",
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name: "PANTALLA",
    precio: 1520,
    imagen: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "MOTOCICLETA",
    precio: 12000,
    imagen: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=400',  
});
productList.push({
    name: "AUTOMOVIL",
    precio: 120000,
    imagen: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "BIKE",
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name: "PANTALLA",
    precio: 1520,
    imagen: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "MOTOCICLETA",
    precio: 12000,
    imagen: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=400',  
});
productList.push({
    name: "AUTOMOVIL",
    precio: 120000,
    imagen: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "BIKE",
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name: "PANTALLA",
    precio: 1520,
    imagen: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "MOTOCICLETA",
    precio: 12000,
    imagen: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=400',  
});
productList.push({
    name: "AUTOMOVIL",
    precio: 120000,
    imagen: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "BIKE",
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name: "PANTALLA",
    precio: 1520,
    imagen: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "MOTOCICLETA",
    precio: 12000,
    imagen: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=400',  
});
productList.push({
    name: "AUTOMOVIL",
    precio: 120000,
    imagen: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "BIKE",
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name: "PANTALLA",
    precio: 1520,
    imagen: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: "MOTOCICLETA",
    precio: 12000,
    imagen: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=400',  
});
productList.push({
    name: "AUTOMOVIL",
    precio: 120000,
    imagen: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=400',
});

function renderProducts(productList){
    for (product of productList) {
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');


        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoInicio = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoInicio.append(productPrice,productName);

        const productInfoFigure = document.createElement('figure');
        const productImgIcon = document.createElement('img');
        productImgIcon.setAttribute('src','icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgIcon);

        productInfo.append(productInfoInicio,productInfoFigure);

        productCar.append(productImg,productInfo);

        cardsContainer.appendChild(productCar);
    }
}
renderProducts(productList);
