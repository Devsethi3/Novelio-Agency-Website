function dropDown() {
  let pageDropDown = document.querySelector(".page-dropdown");
  let page = document.querySelector("#page");
  var flag = 0;
  page.addEventListener("click", () => {
    if (flag == 0) {
      pageDropDown.style.display = "block";
      pageDropDown.style.transition = "0.4s ease-out";
      flag = 1;
    } else {
      pageDropDown.style.display = "none";
      flag = 0;
    }
  });
}
dropDown();

// Navbar menu 

let navLinks = document.querySelector(".nav-link")
function showMenu(){
    navLinks.style.right = "0"
}
function hideMenu(){
    navLinks.style.right = "-300px"
}

// Gsap Animations

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".brand-section",
        scroll: "body",
        // markers: true, 
        start:"top 55%",
        end: "bottom", 
    }
})
tl1.from(".brand-logos" ,{
    opacity: 0,
    x: "50",
    duration: .8
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-section",
        scroll: "body",
        // markers: true, 
        start:"top 70%",
        end: "bottom", 
    }
})
tl2.from(".feature-section>h2", {
    y: "60",
    opacity: 0,
    duration: .7, 
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-sub-section-box",
        scroll: "body",
        // markers: true, 
        start:"top 45%",
        end: "bottom", 
    }
})
tl3.from(".feature-sub-section-box", {
    opacity: 0,
    duration: .8, 
    x: "20",
})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".benefits-section",
        scroll: "body",
        // markers: true, 
        start:"top 50%",
        end: "bottom", 
    }
})
tl4.from(".benefits-section-heading", {
    x: "-100",
    opacity: 0,
    duration: .8
}, "a")
tl4.from(".benefits-section-image", {
    x: "100",
    opacity: 0,
    duration: .8
}, "a")

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ranking-section",
        scroll: "body",
        // markers: true, 
        start:"top 47%",
        end: "bottom", 
    }
})
tl5.from(".ranking-text",{
    y: "150",
    opacity:0,
    duration:.8
}, "b")
tl5.from(".ranking-score",{
    y: "-150",
    opacity:0,
    duration:.8
}, "b")

var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".business-section",
      scroll: "body",
      // markers: true,
      start: "top 30%",
      end: "bottom",
    }
  })
  
  tl6.from(".business-section-item .business-section-item-box", {
    opacity: 0,
    y: 60,
    duration: .7,
  })

var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".clients-section",
      scroll: "body",
      // markers: true,
      start: "top 50%",
      end: "bottom 80%",
      scrub: 5
    }
  })
  
  tl7.from(".clients-section-image .clients-section-image-info", {
    y: 40,
    duration: 1.5,
  })

  let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contribution-section",
        scroll: "body",
        // markers: true, 
        start:"top 50%",
        end: "bottom", 
    }
})
tl8.from(".contribution-section-text", {
    x: "-100",
    opacity: 0,
    duration: .8
}, "c")
tl8.from(".contribution-section-image", {
    x: "100",
    opacity: 0,
    duration: .8
}, "c")


let tl9 = gsap.timeline({
  scrollTrigger: {
      trigger: ".footer",
      scroll: "body",
      // markers: true, 
      start:"top 50%",
      end: "bottom", 
  }
})
