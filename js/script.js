// Tooggle class active
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
