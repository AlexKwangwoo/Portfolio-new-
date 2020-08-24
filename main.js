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

// Handle scrolling when tapping on the navbar menu
// 마우스 클릭할때 data- + 이름에 저장할 요소를 정한다
// #을 붙였으므로.. menu의 요소가 클릭될때 dataset값을 통해 # 아이디 값을 가져온다
// 그다음 scrollIntoView를 통해 원하는 위치의 공간으로 이동하게해준다
// 어떻게 이동할지는 고급설정을 통해 멋지게 설정 가능.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
});