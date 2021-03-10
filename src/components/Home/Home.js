
import {ReactComponent as FacebookIcon} from '../../assets/inicialPag/facebookIcon.svg';
import {ReactComponent as InstagramIcon} from '../../assets/inicialPag/instagramIcon.svg';
import {ReactComponent as MailIcon} from '../../assets/inicialPag/mailIcon.svg';


import './Home.scss'

const Home = () => {

    return (
        <div className="home">
            <div className="home_background"></div>
            <div className="home_contacts">
                <div className="home_contacts_container">
                    <FacebookIcon className="home_contacts_facebook"></FacebookIcon>
                    <InstagramIcon className="home_contacts_instagram"></InstagramIcon>
                    <MailIcon className="home_contacts_mail"></MailIcon>
                </div>
            </div>
        </div>
    )
}

export default Home;