// Tooggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle clas active untuk search from
const searchform = document.guerySelector('.search-from');
const searchbutton = document.guerySelector('#search-button');

document.guerySelector('search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
};


// toggle class active untuk search form
const searchfrom = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchfrom.classList.toggle('active');
  searchbox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// klik di elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchfrom.contains(e.target)) {
    searchfrom.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingcart.classList.remove('active');
  }
});

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search');
const searchInput = document.querySelector('#search-box');


searchBtn.onclick = (e) => {
  searchForm.classList.toggle('active');
   if (searchForm.classList.contains('active')) {
    searchInput.focus();   // 🔥 INI KUNCINYA
  }
  e.preventDefault();
};
