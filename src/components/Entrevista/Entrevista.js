import videoRtp from '../../assets/videos/Entrevista.mp4';
import videoPhotoRtp from '../../assets/videos/Entrevista.png';
import logoRtp from '../../assets/rtpplay.png';
import logoNIS from '../../assets/newinsetubal.png';

import Video from '../../hook/Video/Video';


import './Entrevista.scss'


const Entrevista = () => {


    return (
        <div className='entrevista fadein'>
            <div className='box border orange'>
                <div className='logo_container'>
                    <div className='thumbnail'>Aparecimento em</div>
                    <img className='logo' src={logoRtp} alt='RTP Logo'></img>
                </div>
            <Video poster={videoPhotoRtp} video={videoRtp}></Video>
            </div>
            <div className='box border orange'>
                <div className='logo_container'>
                    <div className='thumbnail'>Aparecimento em</div>
                    <img className='logo' src={logoNIS} alt='New In Setubal Logo'></img>
                </div>
                <button href='#' className='button'>Visitar Artigo</button>
            </div>
        </div>
    )
}

export default Entrevista;