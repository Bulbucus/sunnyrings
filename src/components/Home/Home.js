import {ReactComponent as FacebookIcon} from '../../assets/inicialPag/facebookIcon.svg';
import {ReactComponent as InstagramIcon} from '../../assets/inicialPag/instagramIcon.svg';
import {ReactComponent as MailIcon} from '../../assets/inicialPag/mailIcon.svg';
import {ReactComponent as Arrow} from '../../assets/inicialPag/arrow-down.svg';

//animaçao inicial
import animation from './animation';

import './Home.scss'
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        //animaçao inicial
        animation();
    },[])

    return (
        <div className="home">
            <div className="home_background"></div>
            <div className="home_contacts">
                <div className="home_contacts_container">
                    <a href="https://www.facebook.com/Sunny-Rings-103483725036223/" target='_blank' rel='noreferrer'><FacebookIcon className="home_contacts_facebook"></FacebookIcon></a>
                    <a href="https://www.instagram.com/sunny.rings/" target='_blank' rel='noreferrer'><InstagramIcon className="home_contacts_instagram"></InstagramIcon></a>
                    <a href="mailto: madapires9@gmail.com" target='_blank' rel='noreferrer'><MailIcon className="home_contacts_mail"></MailIcon></a>
                </div>
            </div>
            <div className="home_arrows white">
                <Arrow className="white"></Arrow>
            </div>
        </div>
    )
}

export default Home;