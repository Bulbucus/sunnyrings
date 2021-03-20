import videoRtp from '../../assets/videos/Entrevista.mp4';
import videoPhotoRtp from '../../assets/videos/Entrevista.png';
import logoRtp from '../../assets/rtpplay.png';
import logoNIS from '../../assets/newinsetubal.png';

import './Entrevista.scss'

const Entrevista = () => {

    return (
        <div className='entrevista'>
            <div className='box border orange'>
                <div className='logo_container'>
                    <div className='thumbnail'>Aparecimento em</div>
                    <img className='logo' src={logoRtp} alt='RTP Logo'></img>
                </div>
                <div className='video'>
                    <video poster={videoPhotoRtp} onClick={(event) => {event.target.paused ? event.target.play() : event.target.pause()}}>
                        <source src={videoRtp}></source>
                    </video>
                </div>
            </div>
            <div className='box border orange'>
                <div className='logo_container'>
                    <div className='thumbnail'>Aparecimento em</div>
                    <img className='logo' src={logoNIS} alt='New In Setubal Logo'></img>
                </div>
                <div className='button'>Visitar Artigo</div>
            </div>
        </div>
    )
}

export default Entrevista;