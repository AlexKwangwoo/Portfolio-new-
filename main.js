'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY); 스크롤 높이 알기기
  // console.log(`navbarHeight : ${navbarHeight}`); 넷바 크기 알기!
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Make home slowly fade to reansparent as the window scrolls down
//스크롤이 내려갈수록 홈화면이 점점 투명해짐!
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make home slowly fade to reansparent as the window scrolls down
//스크롤이 내려갈수록 에로우 방향이 점점 투명해짐!
// const about = document.querySelector('#about');
// const about_h = about.getBoundingClientRect().height + homeHeight;
// const btn = document.querySelector('#arrow');
// document.addEventListener('scroll', () => {
//   btn.style.opacity = window.scrollY / homeHeight;
// });

const about = document.querySelector('#about');
const about_h = about.getBoundingClientRect().height + homeHeight;
const btn = document.querySelector('#arrow');
document.addEventListener('scroll', () => {
  if (window.scrollY > (about_h / 4)) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});





// const about = document.querySelector('#about');
// const about_h = about.getBoundingClientRect().height;

// const skills = document.querySelector('#skills');
// const skills_h = about.getBoundingClientRect().height;

// const myWork = document.querySelector('#work');
// const myWork_h = about.getBoundingClientRect().height;

// const test = document.querySelector('#testimonials');
// const test_h = about.getBoundingClientRect().height;

// const contact1 = document.querySelector('#contact');
// const contact1_h = about.getBoundingClientRect().height;

// const until_about = homeHeight + about_h;
// const until_skills = until_about + skills_h;
// const until_myWork = until_skills + myWork_h;
// const until_test = until_myWork + test_h;
// const until_contact = until_test + contact1_h;


// document.addEventListener('scroll', () => {
//   const buttonTarget = document.querySelector('.navbar__menu__item.active');

//   if (window.scrollY > homeHeight && window.scrollY < until_about) {
//     buttonTarget.classList.remove('active');
//     var aim = document.querySelector('#nA');
//     aim.classList.add('active')
//   } else if (window.scrollY > until_about && window.scrollY < until_skills) {
//     buttonTarget.classList.remove('active');
//     var aim = document.querySelector('#nS');
//     aim.classList.add('active')
//   } else if (window.scrollY > until_skills && window.scrollY < until_myWork) {
//     buttonTarget.classList.remove('active');
//     var aim = document.querySelector('#nM');
//     aim.classList.add('active')
//   } else if (window.scrollY > until_myWork && window.scrollY < until_test) {
//     buttonTarget.classList.remove('active');
//     var aim = document.querySelector('#nT');
//     aim.classList.add('active')
//   } else if (window.scrollY > until_test && window.scrollY < until_contact) {
//     buttonTarget.classList.remove('active');
//     var aim = document.querySelector('#nC');
//     aim.classList.add('active')
//   } else {
//     buttonTarget.classList.remove('active');
//     var aim = document.querySelector('#nH');
//     aim.classList.add('active')
//   }
// });

// function loactionChange(selector) {
//   buttonTarget.classList.remove('active');
//   var aim = document.querySelector(selector);
//   aim.classList.add('active')
// }




// Handle scrolling when tapping on the navbar menu
// 마우스 클릭할때 data- + 이름에 저장할 요소를 정한다
// #을 붙였으므로.. menu의 요소가 클릭될때 dataset값을 통해 # 아이디 값을 가져온다
// 그다음 scrollIntoView를 통해 원하는 위치의 공간으로 이동하게해준다
// 어떻게 이동할지는 고급설정을 통해 멋지게 설정 가능.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  // console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
  const buttonTarget = document.querySelector('.navbar__menu__item.active');
  buttonTarget.classList.remove('active');
  target.classList.add('active');
})


// Handle cilck on "contact me" button on home
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoView(link);

  // if (link == null) {
  //   return;
  // }
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({
  //   behavior: 'smooth'
  // });
});

// Handle cilck on "Arrow" button on home
const arrow = document.querySelector('#arrow');
arrow.addEventListener('click', (event) => {

  scrollIntoView('#home');

  // if (link == null) {
  //   return;
  // }
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({
  //   behavior: 'smooth'
  // });
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth"
  });
}