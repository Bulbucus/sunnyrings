import {useRef, useState} from 'react';

import {ReactComponent as PlayIcon} from '../../assets/play_icon.svg';
import {ReactComponent as LoadingIcon} from '../../assets/loading_icon.svg';

import './Video.scss';

const Video = ({poster, video, width}) => {

    const [play, setPlay] = useState(false)
    const [canPlay, setCanPlay] = useState(false)
    const videoRef = useRef()

    return (
        <div className='video_container'>
        {play ? (canPlay ? null : <LoadingIcon onClick={() => {videoRef.current.pause()}} className='play_icon'></LoadingIcon>) : <PlayIcon onClick={() => {videoRef.current.play()}} className='play_icon'></PlayIcon>}
        <video 
            ref={videoRef}
            poster={poster} 
            preload='none' 
            onClick={(event) => {event.target.paused ? event.target.play() : event.target.pause()}} 
            onCanPlay={() => {setCanPlay(true)}} 
            onPlay={() => setPlay(true)} 
            onPause={() => setPlay(false)}
            style={{width:width}}
        >
            <source src={video}></source>
        </video>
    </div>
    )
}

export default Video;