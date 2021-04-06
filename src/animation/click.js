import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const clickEffect = (where, id) => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.from(where, {
        scale:0.85,
        ease:"back",
        duration:0.4,
    })
    gsap.to(window, {scrollTo:id})

}

export default clickEffect;