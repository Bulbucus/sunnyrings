import VideoInox from '../../assets/videos/Snaptik_6921407012987243781_madalena-pires.mp4';
import VideoInox2 from '../../assets/videos/Snaptik_6931079450717146373_madalena-pires.mp4';
import VideoArame from '../../assets/videos/Snaptik_6923988626481204485_madalena-pires.mp4';
import VideoPhotoInox from '../../assets/videos/VideoInox.png';
import VideoPhotoInox2 from '../../assets/videos/VideoInox2.png';
import VideoPhotoArame from '../../assets/videos/VideoArame.png';

import Video from '../../hook/Video/Video'

import './Processo.scss'

const Processo = () => {

    return (
        <div className='processo'>
            <div className='box border orange fadein'>
                <div className='thumbnail'>Anel Inox</div>
                    <Video poster={VideoPhotoInox} video={VideoInox}/>
            </div>
            <div className='box border orange fadein'>
                <div className='thumbnail'>Anel Inox</div>
                <div className='video_container'>
                    <Video poster={VideoPhotoInox2} video={VideoInox2}/>
                </div>
            </div>
            <div className='box border orange fadein'>
                <div className='thumbnail'>Anel Arame</div>
                <div className='video_container'>
                    <Video poster={VideoPhotoArame} video={VideoArame}/>
                </div>
            </div>
        </div>
    )
}

export default Processo;