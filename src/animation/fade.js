import gsap from 'gsap';

// animation fade
// pass argument: se serve para passar um por cima do outro
const fade = (type, where, pass, shadow) => {
    switch (type) {
        case 'in':
            gsap.to(where, {
                opacity:1,
                filter: shadow && "drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.35))",
                duration:0.5,
                ease:"power1",
                display:'initial',
                position: pass ? 'absolute' : 'initial',
            })
            break;
    
        case 'out':
            gsap.to(where, {
                opacity:0,
                duration:0.5,
                ease:"power1",
                display:'none',
                position: pass ? 'absolute' : 'initial',
                filter: shadow && "drop-shadow(0px 0px 0px)"
            })
            break;
        default:
            break;
    }
}

export default fade;