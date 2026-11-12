gsap.registerPlugin(SplitText,ScrollTrigger,)

var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")




main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out",
    opacity:1

  })
})






var tl = gsap.timeline()


const chars = SplitText.create(".loadtext", { type: "chars" });
tl.from(chars.chars, {
  rotationY: -80, 
  opacity: 0,
  duration: 2,
   stagger: 0.07,
  ease: "back.out(1.2)",
  transformOrigin: "50% 50% -20px",


});

tl.to(".line",{
  width:"100%",
  duration:1,
  scrub:true,
  
}
  
)




tl.to(".loadline",{
  duration:.1,
  opacity:0,
y:"-200%",
  scrub:true,
})




tl.to(".loadtext",{
  duration:.1,
  y:"-200%",
  opacity:0,
  scrub:true,
})


tl.to(".load",{
  width: 0,
  duration:1,
  stagger:0.2,

  
  
})

 

const words = SplitText.create(".high", { type: "words" });
tl.from(words.words,{
  opacity: 0,
   y: 40,
   fliter:"blur(5px)" ,
   rotation: 5,
  duration: .6, 
  stagger: 0.2,
  ease: "power3.out",
scrollTrigger: {
        trigger: ".page1",
      
 
  
}});




tl.to(".loader",{
  width:0,
  duration:3,

})






tl.fromTo(".land",{
  yPercent :-10},{
    yPercent:10,
    ease:"none",
    scrollTrigger:{
      trigger:".page1",
      start:"top bottom",
      end:"bottom top",
      scrub:true,
    
    }

})




tl.to(" .img2", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  duration:1,
  ease: "power3.inOut",
  scrollTrigger:{
    trigger:" .img2",
    scrub:true,
    end:"bottom 78%",
  
  

  

  }
  
});




var gtl = gsap.timeline({scrollTrigger:
  {
trigger:".page3",
start:"10% 10%",
end:"90% 90%",
scrub:2,
pin:true,

  }
})




gtl.to(".top",{
  top:"-80%",
},'a')
gtl.to(".bottom",{
  bottom:"-80%"
},'a')














tl.fromTo(".intro",{
  yPercent :-10},{
    yPercent:10,
    ease:"none",
    scrollTrigger:{
      trigger:".page2",
      start:"top bottom",
      end:"bottom top",
      scrub:true,
    
    }

})








const charsk = SplitText.create(".hello", { type: "charsk" });
tl.from(charsk.chars, {
  rotationY: -80, 
  opacity: 0,
  duration: 1,
   stagger: 0.07,
  ease: "back.out(1.2)",
  transformOrigin: "50% 50% -20px",
  scrollTrigger:{
    trigger:".about",
    scrub:true,


  }


});





gsap.registerPlugin(ScrollTrigger, SplitText);
const split = SplitText.create(".textog", { type: "words" });

gsap.to(split.words, {
  color: "#ffffff",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".textog",
    start: "top center",
    end: "bottom center",
    scrub: true,
  }
});

const split2 = SplitText.create("span", { type: "words" });

gsap.to(split2.words, {
  color: "#D0C5AB",
  stagger:1,
  scrollTrigger: {
    trigger: "span",
    start: "top center",
    end: "bottom center",
    scrub: true,
  }
});


gtl.to(".yellow", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  duration: 2.8,
  ease: "power3.inOut",
  scrollTrigger: ".websites",
  scrub:true,
  opcity:0,

});





const chars4 = SplitText.create(".textsk", { type: "chars" });
gsap.from(chars4.chars, {
  opacity: 0,
   y: 30,
  duration: 0.6,
   stagger: 0.03,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".page4",
    start:"top",
    
    
    
  }
});







const chars5 = SplitText.create(".dtext", { type: "chars" });
gsap.from(chars5.chars, {
  opacity: 0,
   y: 30,
  duration: 0.6,
   stagger: 0.03,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".devlop",
    start:"top",
    
 
    
  }
});






gsap.from(".imgr" ,{
  opacity: 0,
   y: 30,
  duration: 0.6,
   stagger: 0.03,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".devlop",
    start:"top",
 
    
  }
});






gsap.from(".design" ,{
  opacity: 0,
   y: 30,
   
  duration: 0.8,
   stagger: 0.03,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".devlop",
    start:"top",
 
    
  }
});




const chars6 = SplitText.create(".desit", { type: "chars" });
gsap.from(chars6.chars, {
  opacity: 0,
   y: 50,
  
  duration: 0.8,
   stagger: 0.03,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".devlop",
    start:"top",
 
    
  }
});


 

tl.fromTo(".devlop",{
  yPercent :-10},{
    yPercent:10,
    ease:"none",
    scrollTrigger:{
      trigger:".page4",
      start:"top bottom",
      end:"bottom top",
      scrub:true,
    
    }

})






















const words3 = SplitText.create(".navbar li", { type: "words" });
gsap.from(words3.words, {
  opacity: 0, y: 70, rotation: 8,
  duration:4, stagger: 0.6,
  delay:1,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".page1",
  }
});



gsap.from(".land",{
  scale:2,
  duration:4,
  delay:1,
  y:70,
  scrollTriggger:{
    trigger:".page1",
    ease:"power3.out"
  }
  
})


 const words4 = SplitText.create(".lets h1 ", { type: "words" });
gsap.from(words4.words, {
  opacity: 0, 
  y: 70, 
  rotation: 6,
  duration:2.2, stagger: 0.08,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".page5",
  }
});





const words5 = SplitText.create(".lets h3", { type: "words" });
gsap.from(words5.words, {
  opacity: 0, 
  y: 70, 
  rotation: 6,
  delay:.1,
  duration:2, stagger: 0.08,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".page5",
  }
});



gsap.from(".logofooter img",{
 rotate:360,
 x:800,
  duration:2,
  
  scrollTrigger:{
    trigger:".page5",
    ease:"power3.out",
    
    

  }
})







const words6 = SplitText.create(".brandingjot", { type: "words" });
gsap.from(words6.words, {
  opacity: 0, 
  y: 70, 
  rotation: 6,
  delay:.1,
  duration:4, stagger: 0.08,
  ease: "expo",
  scrollTrigger:{
    trigger:".page5",
  }
});













tl.fromTo(".footerupper",{
  yPercent :-10},{
    yPercent:10,
    ease:"none",
    scrollTrigger:{
      trigger:".page5",
      start:"top bottom",
      end:"bottom top",
      scrub:true,
    
    }

})





