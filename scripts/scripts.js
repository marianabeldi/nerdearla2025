 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MorphSVGPlugin,ScrollTrigger,SplitText,DrawSVGPlugin);

  // Custom cursor
    gsap.set(".cursor", {xPercent: -50, yPercent: -50, zIndex: 1000});

    let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});

    window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
    });


const tl = gsap.timeline();

tl.from("svg", {autoAlpha:0})

.from("#arco path, #piso polygon, #arcoiris path", {
    drawSVG: 0,
    fill: "transparent",
    stroke: "var(--cream)",
    duration: 2,
    stagger: {
    each: 0.2,
    from: "end"
  }
})

.from("#tulipanes g", {
    scale: 0,
    transformOrigin: "bottom center",
    opacity: 0,
    duration: 1,
    ease: "sine.out",
    stagger: {
      each: 0.2,
      from: "random"
    }
}, "<")

    .from(".fecha", {
      y: -300,
      duration: 1.5,
      rotate: -90,
      ease: "bounce.out"
    }, "<")


    .set("#estrellas > polygon", {fill: "var(--yellow)", opacity: 0})
    .fromTo('#estrellas > *', {
      opacity: 0.5,
      scale: 0.5,
      rotate: -45,
      transformOrigin: 'center',
    }, {
        duration:.5,
      ease: 'linear',
      scale: "random(0.8, 1.5)",
      rotate: "random(-45, 45)",
      opacity: 1,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: "random"
      },
    })



    .to("#arcoiris", {
        scale: "random(1, 2)",
        duration: 12,
        repeat: 3,
        yoyo: true,
        ease: "linear",
    }, "<")




gsap.set("h2", { opacity: 1 });

  const headlineSplit = SplitText.create("h1", {
    type: "chars",
  });

  gsap.from(headlineSplit.chars, {
    y: 100,
    opacity: 0,
    rotation: "random(-80, 80)",
    stagger: 0.05,
    duration: .8,
    ease: "back.out(1.7)",
  });






SplitText.create(".intro-p", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      duration: 1, 
      y: 100, 
      autoAlpha: 0, 
      stagger: 0.05
    });
  }
});






gsap.from('.intro-logo', {
    opacity: 0,
    duration: 4
})

// let intro = gsap.timeline({
//     scrollTrigger: {
//         markers: true,
//         trigger: 'header',
//         start: 'top top',
//         scrub: true,
//         end: '+=300',
//         pin: true,
//     }
// });

intro.to('.intro-logo', {
    scale: 0.8
})
.from('.intro-sub', {
    y: 600
}, '<')






});


