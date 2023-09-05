gsap.registerPlugin(ScrollTrigger);
function lenisSmoothScroll(){
  const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

}

const svganimation = document.querySelector(".toggle_btn");
// gsap.registerPlugin(ScrollTrigger , SplitText);

function sidebarShow(){
  window.onload = function(){
    svganimation.addEventListener("click", function(dets){
      this.classList.toggle("active");
        var t1 = gsap.timeline();
      if(this.classList.contains("active")){
        t1
        .to("#menu_sidebar" , {
          top:"0%",
          ease: Expo.easeInOut,
          duration:1.5
        }, "<")
        .from("#sidebar_nav ul li",{
          x:-200,
          opacity:0,
          stagger:.5,
          ease: Power2.easeOut,
          duration:1
        })
      }else{
        t1
        .to("#menu_sidebar" , {
          top:"-100%",
          ease: Expo.easeInOut,
          duration:1.5
        })
        

      }
    })
  }
}

function navHideOTarget(){
  const navList = document.querySelector('.navbar-list');

navList.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    // Hide the navbar
    gsap.to("#menu_sidebar" , {
      top:"-100%",
      ease: Expo.easeInOut,
      duration:1.5
    })
    if(svganimation.classList.contains("active")){
      svganimation.classList.remove("active")
    }
  }
});

}

// function heroAnim(){

//   const splitHeading = new SplitText('#hero_main_heading h1');
// }

sidebarShow();
lenisSmoothScroll();
navHideOTarget();
// heroAnim();