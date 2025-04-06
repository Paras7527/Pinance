let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+30-30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 125 + "px"
    blur.style.top = dets.y - 125 + "px"

});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //    markers:true,
        start: "top -10%",
        end: "top 1px",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: 'body',
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
});





