let menuBtn = document.querySelector('.header__nav--btn')
let mwrapper = document.querySelector('.header__nav--mwrapper')
let navMobile = document.querySelector('.header__list')
let navLinks = Array.from(document.querySelectorAll('.header__link'))

menuBtn.addEventListener('click',() => {
  menuBtn.classList.toggle('active')
  mwrapper.classList.toggle('active')
  navMobile.classList.toggle('active')

  if (menuBtn.classList.contains('active')) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
      setTimeout(() => {
        navLinks[i].classList.add('active')
      }, i*200)
    }
  }
})