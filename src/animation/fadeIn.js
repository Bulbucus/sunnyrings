import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const fadeInAnimation = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray('.title > span').forEach(section => {
      gsap.from(section,{
        opacity:0,
        scale:0.2,
        duration:1.5,
        ease:"slow",
        scrollTrigger:{
            trigger:section,
            start:'top bottom',
        }
      })
    })
    gsap.utils.toArray('.fadein').forEach(fadeIn => {
      gsap.from(fadeIn,{
        opacity:0,
        scale:0.5,
        duration:1,
        ease:"power2",
        scrollTrigger:{
            trigger:fadeIn,
            start:'-70 bottom',
        }
      })
      gsap.from(fadeIn.querySelectorAll('.thumbnail, .text, .important, .price, .button, img, .video_container'),{
        opacity:0,
        duration:2,
        ease:"power1",
        scrollTrigger:{
            trigger:fadeIn,
            start:'top bottom',

        }
      })
    })
}

export default fadeInAnimation;