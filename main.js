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
  navbarMenu.classList.remove('open');
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
  // const buttonTarget = document.querySelector('.navbar__menu__item.active');
  // buttonTarget.classList.remove('active');
  // target.classList.add('active');
})


//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});


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

// Projects



//***************************************************************
//******************** 어려움!!! 다시볼것!!***********************
//***************************************************************

// const filter = A || B  A가 false면 B를 실행시킨다!
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
const category = document.querySelectorAll('.category__btn');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  // 위에랑 밑에것이 똑같다!
  // var filter2 = e.target.dataset.filter;
  // if (filter2 == null) {filter2 = e.target.parentNode.dataset.filter;}

  if (filter == null) {
    return;
  }

  //프로젝트 에서 하나 누르면 색이랑 에니메이션 지속하기..
  //에니메이션은 active에서 유지되고있다!!
  category.forEach(type => {
    console.log(type);
    if (type.dataset.filter == filter) {
      type.classList.add('active');
    } else {
      type.classList.remove('active');
    }
  });
  //밑에가 더 쉬운 버전이다!! 아니다...밑에꺼는 span클릭시 적용안됨!!
  // 내꺼가 되는이유는.. span클릭이 되도 const filter 정의에서 스판이 부모
  // 노드의 필터값으로 전환이 되기 때문이다!

  // const a = document.querySelector('.category__btn.active');
  // a.classList.remove('active');
  // e.target.classList.add('active');



  //그냥 프로젝트들은 display none 이기 때문에 에니메이션이 안된다! 사라져버림!
  // 그래서 그걸 담고있는 projectconatiner를 이용한다! 이 자체도 밑에 식에 의해
  //  visible만 보이게 된다!

  // projectContainer.classList.add('anim-out');
  // projects.forEach((project) => {
  //   if (filter === project.dataset.type || filter === '*') {
  //     project.classList.remove('invisible');
  //   } else {
  //     project.classList.add('invisible');
  //   }
  // }) 
  // setTimeout(() => {
  //   projectContainer.classList.remove('anim-out');
  // }, 300);

  // **********************
  // ********중요!!********
  // **********************
  // 위에식처럼 되어 있으면 동시에 진행된다!! 
  // 우리가 생각할때는 1. 내려간다. 2. 바귄다. 3.다시 올라온다 생각하지만
  // 1과 2는 사실상 시간 차이가 거의없어서 바뀌면서 내려간다. 
  // 그래서 누르자마자 바뀐화면이 내려갔다가 다시올라오는것임(이미 예상다해서
  // 애니메이션의 흥미가 떨어짐..)


  projectContainer.classList.add('anim-out');
  // 지정된 시간후에 이 함수를 불러와준다! 안그러면 그냥 잠깐내려오고
  // opacity 0.6 유지만 된다!
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === project.dataset.type || filter === '*') {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
  // 이렇게 되어있어야. 먼저 전화면을 띄워주고! 내려간다.. 내려간뒤 0.3초뒤 그림이 바뀌고
  // 그다음 다시 anim-out이 사라지면서 원상복귀 된다!!
  // 간다하게 설명.. 그냥 있던 상태의 프로젝트 그림을 가지고 내려오고.. 0.3초뒤
  // 실행되는 함수에의해 바뀌고 동시에 위로 올려보냄!!

  // 다른곳 누르면.. 필터링된후 바뀌고 한번다 보여준다음 anim-out실행되고 꺼지고
  // 다른곳 누르면.. 그대로가 anim-out실행되고 필터링된후 보여주고 anim-out이 꺼진다.





});