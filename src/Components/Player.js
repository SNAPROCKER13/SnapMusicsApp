import { useEffect, useState } from 'react';

import previousIcon from '../Assets/icons/previous.png'
import playIcon from '../Assets/icons/play.png'
import pauseIcon from '../Assets/icons/pause.png'
import nextIcon from '../Assets/icons/next.png'

const Player = ({artWorkSong,playSongs,play,pause,duration,sound, setIsPlaying, isPlaying}) => {

    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
      }); 
    const [seconds, setSeconds] = useState();

    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
    min: min,
    sec: secRemain
    };
    
    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };

      useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([])); // setting the seconds state with the current state
            const min = Math.floor(sound.seek([]) / 60);
            const sec = Math.floor(sound.seek([]) % 60);
            setCurrTime({
              min,
              sec,
            });
          }
        }, 1000);
        return () => clearInterval(interval);
      }, [sound]);

    return(
        <div className="desktop:px-12 laptop:px-12 border-2 border-black flex fixed  bottom-0 items-center justify-between w-full bg-white desktop:flex-row desktop:h-24 laptop:flex-row laptop:h-24 tablet:flex-col tablet:h-60 tablet:py-6 tablet:px-0">
              <div className='border-2 border-black'>
                  <div className="w-24 h-24 bg-sky-400">
                      {artWorkSong ? <img 
                          src={artWorkSong} alt="artwork" 
                          className='h-full'
                      >
                      </img>:""}
                  </div>
              </div>

              <div className="flex desktop:w-1/2 tablet:w-full justify-center items-center ">
                  <p  className='w-max mr-5'>
                      {currTime.sec > 9 ? `${currTime.min} : ${currTime.sec}` : `${currTime.min} : 0${currTime.sec}`}
                  </p>
                  <img src={previousIcon} alt="previoustIcon" className='h-8 w-8 mr-5'></img>
                  <input
                      type="range"
                      min="0"
                      max={duration / 1000}
                      default="0"
                      value={seconds}
                      className="timeline"
                      onChange={(e) => {
                          sound.seek([e.target.value]);
                      }}
                  />
                  {!isPlaying ? <img onClick={()=>playingButton()} src={playIcon} alt="playIcon" className='h-8 w-8'></img>
                  :
                  <img onClick={()=>playingButton()} src={pauseIcon} alt="pauseIcon" className='h-8 w-8'></img>}
                  <img src={nextIcon} alt="nextIcon" className='h-8 w-8 ml-5'></img>
                  <p  className='w-max ml-5'>
                      {time.min}:{time.sec}
                  </p>
              </div>

              <div className="flex w-1/4 justify-around flex-wrap">
                  <p className='w-max'>Title: {playSongs?.title}</p>
                  <p className='w-max'>Artist: {playSongs?.artist}</p>
              </div>
      </div>
    )
}

export default Player