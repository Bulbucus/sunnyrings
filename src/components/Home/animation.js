import gsap from 'gsap';

import Background from '../../assets/inicialPag/background.svg';

const animation = () => {
        // para quando a pessoa entra a primeira vez, assim é obrigada a ver animaçao
        const notFirstTime = localStorage.getItem('notFirstTime')
        const scrollBehavior = notFirstTime ? 'inherit' : 'hidden'

        // Resize home class for smallest mobiles
        const resizeHome = () => {
            const heightClient = window.innerHeight;
            if(window.innerWidth < 342){
                document.querySelector('.home').style.height = `${heightClient}px`;
                document.querySelector('.home_background').style.height = `${heightClient}px`
            } else {
                document.querySelector('.home').style.height = '100vh';
                document.querySelector('.home_background').style.height = '100vh';
            }
        }
        // execute everytime is resize
        window.addEventListener('resize', () => {
            resizeHome()
        })
        resizeHome()
        
        const backgroundDiv = document.querySelector('.home_background')
        // como "onload" so funciona em "img" criamos uma <img>
        const bgImage = new Image();
        // quando o src da imagem tiver descarregado executa a "onload"
        // é necessario isto por causa das animaçoes/css dentro de "background.svg"
        bgImage.onload = function() {
            backgroundDiv.style.backgroundImage = `url(${bgImage.src})`;

            const timeline = gsap.timeline({
                    delay:1, 
                    onStart: () => {document.body.style.overflow = scrollBehavior} ,
                    onComplete: () => {document.body.style.overflow = 'inherit'}
                })
    
            timeline.to(".home_contacts_container", {opacity:1, duration:2, ease:'power2'})
            timeline.to(".home_contacts_mail", {opacity:1, duration:0.4, ease:'none'})
            timeline.to(".home_contacts_instagram", {opacity:1, duration:0.4, ease:'none'})
            timeline.to(".home_contacts_facebook", {opacity:1, duration:0.4, ease:'none'})
            timeline.to(".home_arrows", {opacity:1, duration:0.3, ease:'none'})
            
        }
        bgImage.src = Background;
        localStorage.setItem('notFirstTime', 'true')
}

export default animation;