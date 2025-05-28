
gsap.from("nav",{
    y:-50,
    scale:0.1,
    duration:1,
    delay:.5,
})
gsap.from("nav ul li",{
    y:-50,
    delay:2,
    duration:.5,
    stagger:.5
})
gsap.from("#home .vertical p",{
    rotate:360,
    duration:2,
    delay:1,
    repeat:1,
    yoyo:true
})
gsap.from("#home .vertical .v1",{
    x: 800,
    duration:2,
    // delay:
})
gsap.from("#home .vertical .v2",{
    x: -800,
    duration:2,
    // delay:
})
gsap.from("#home .box",{
    scale:0,
    duration:2,
    delay:2
})
gsap.from("#home .box .opacity",{
    opacity:0,
    y:20,
    duration:1,
    delay:4,
    stagger:.4
})
gsap.from('#cont .background img',{
    y:-40,
    scale:.4,
    duration:4,
    repeat:-1,
    yoyo:true
    
})



let icon = document.querySelector('.icon');
let ul =document.querySelector('ul')
let text= document.querySelector('.about .bottom .li')
let p1= document.querySelector('.about .bottom .points .p1')
let p2= document.querySelector('.about .bottom .points .p2')

icon.addEventListener('click',()=>{
    ul.classList.toggle('show_data')


    if(ul.className =="show_data"){
        document.getElementById('ham').className= "ri-close-line"
    }
    else{
        document.getElementById('ham').className= "ri-menu-line"
    }
})

p1.addEventListener('click',function(){
    text.innerHTML="<li>Creative forntend developer</li> <li>UI designer</li>"
})
p2.addEventListener('click',function(){
    text.innerHTML="<li>B-Tech ----- 2023-2026</li> <li>10+2 ----- 2018-2022</li>"
})