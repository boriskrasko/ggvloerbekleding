for (const dropdown of document.querySelectorAll('.select-wrapper')) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.select').classList.toggle('open');
  })
}
for (const option of document.querySelectorAll('.option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.select').querySelector('.select-title span').textContent = this.textContent;
    }
  })
}
window.addEventListener('click', function (e) {
  for (const select of document.querySelectorAll('.select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  }
});

let contactContainer = document.querySelector('.contact-container');
let contactWidgetBtn = document.querySelector('.contact-widget-btn');
let searchBtn = document.querySelector('.search-btn');
let searchModal = document.querySelector('.search');

window.onscroll = function () {
  myFunction()
};

let navbar = document.querySelector('.navbar');
let main = document.querySelector('.main');
let mobile = document.getElementById('menuToggle');
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    searchModal.style.marginTop = '-40px';
    mobile.style.position = 'fixed';
    mobile.style.marginTop = '30px';
    main.style.marginTop = '-128px';

  } else {
    navbar.classList.remove('sticky');
    mobile.classList.remove('sticky');
    mobile.style.marginTop = '0';
    mobile.style.position = 'relative';
    searchModal.style.marginTop = '0';
    main.style.marginTop = '-200px';
  }
}

contactWidgetBtn.addEventListener('click', () => {
  contactContainer.classList.toggle('visibility');
  contactWidgetBtn.classList.toggle('x');
})

window.addEventListener('click', function (e) {
    if (!contactWidgetBtn.contains(e.target)) {
    contactContainer.classList.remove('visibility');
    contactWidgetBtn.classList.remove('x');
  }
})

window.addEventListener('click', function (e) {
  if (!searchBtn.contains(e.target) && !searchModal.contains(e.target)) {
    searchModal.classList.remove('flex');
  }
})

searchBtn.addEventListener('click', () => {
  searchModal.classList.toggle('flex');
})
