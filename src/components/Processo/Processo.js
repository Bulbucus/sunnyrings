import VideoInox from '../../assets/videos/Snaptik_6921407012987243781_madalena-pires.mp4';
import VideoInox2 from '../../assets/videos/Snaptik_6931079450717146373_madalena-pires.mp4';
import VideoArame from '../../assets/videos/Snaptik_6923988626481204485_madalena-pires.mp4';
import VideoPhotoInox from '../../assets/videos/VideoInox.png';
import VideoPhotoInox2 from '../../assets/videos/VideoInox2.png';
import VideoPhotoArame from '../../assets/videos/VideoArame.png';

import './Processo.scss'

const Processo = () => {

    return (
        <div className='processo'>
            <div className='box border orange'>
                <div className='thumbnail'>Anel Inox</div>
                <div className='video_container'>
                    <video className='video' poster={VideoPhotoInox} onClick={(event) => {event.target.paused ? event.target.play() : event.target.pause()}}>
                        <source src={VideoInox}></source>
                    </video>
                </div>
            </div>
            <div className='box border orange'>
                <div className='thumbnail'>Anel Inox</div>
                <div className='video_container'>
                    <video className='video' poster={VideoPhotoInox2} onClick={(event) => {event.target.paused ? event.target.play() : event.target.pause()}}>
                        <source src={VideoInox2}></source>
                    </video>
                </div>
            </div>
            <div className='box border orange'>
                <div className='thumbnail'>Anel Arame</div>
                <div className='video_container'>
                    <video className='video' poster={VideoPhotoArame} onClick={(event) => {event.target.paused ? event.target.play() : event.target.pause()}}>
                        <source src={VideoArame}></source>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Processo;