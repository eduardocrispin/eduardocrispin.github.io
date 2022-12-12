//Squares Animation
gsap.from(".chucked", {
    duration: 5,
    rotation: 720,
    ease:"bounce",
    stagger: 0.5,
    x: -500,
    y: -500,
});

gsap.from(".headline", {
    duration: 2.5,
    stagger: 0.3,
    opacity: 0,
    width:248, height:73, x:1, y:2, path:"#uniformSVG"
})

gsap.from (".headline-explore", {
    duration: 1.5,
    stagger: 2.5,
    opacity: 0,
})

gsap.from (".para1", {
    duration: 5.5,
    stagger: 2.5,
    opacity: 0,
    width:248, 
    height:73, 
    x:1, 
    y:2, 
    path:"#easeOutSVG"
})

gsap.from (".para2", {
    duration: 5.5,
    stagger: 3.5,
    opacity: 0,
    width:248, 
    height:73, 
    x:1, 
    y:2, 
    path:"#easeOutSVG"
})

gsap.from (".para3", {
    duration: 4.5,
    stagger: 3.5,
    opacity: 0,
    width:248, 
    height:73, 
    x:1, 
    y:2, 
    path:"#easeOutSVG"
})