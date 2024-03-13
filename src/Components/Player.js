import { useEffect, useState } from 'react';

import again from '../Assets/songs/again.mp3'
import brain from '../Assets/songs/brain.mp3'
import fool from '../Assets/songs/fool.mp3'
import forget from '../Assets/songs/forget.mp3'
import lovesecret from '../Assets/songs/lovesecret.mp3'
import reason from '../Assets/songs/reason.mp3'

import oneImage from '../Assets/image/1.jpg'
import twoImage from '../Assets/image/2.jpg'
import theeImage from '../Assets/image/3.jpg'
import fourImage from '../Assets/image/4.jpg'
import fiveImage from '../Assets/image/5.jpg'
import sixImage from '../Assets/image/6.jpg'

const Player = ({MyMusics,playId}) => {

    const [playSongs, setPlaySongs] = useState({})

    console.log(playSongs?.file_music)

    useEffect(() => {

        const MyMusic = MyMusics.map((item) => {

            if(item.id == playId){
               return (item)
            }
    
        })

        setPlaySongs(MyMusic[playId-1])

    })

  
    const artWork = playSongs?.art_work == 'oneImage' ? oneImage : 
    playSongs?.art_work == 'twoImage' ? twoImage : 
    playSongs?.art_work == 'theeImage' ? theeImage :
    playSongs?.art_work == 'fourImage' ? fourImage :
    playSongs?.art_work == 'fiveImage' ? fiveImage :
    playSongs?.art_work == 'sixImage' ? sixImage : ""




    const song = playSongs?.file_music == 'lovesecret' ? lovesecret : 
    playSongs?.file_music == 'forget' ? forget : 
    playSongs?.file_music == 'again' ? again :
    playSongs?.file_music == 'fool' ? fool :
    playSongs?.file_music == 'reason' ? reason :
    playSongs?.file_music == 'brain' ? brain : ""
    
    console.log(song)

    return(
        <div className="px-12 border-2 border-black flex fixed  bottom-0 items-center justify-between w-full bg-white desktop:flex-row desktop:h-24 laptop:flex-row laptop:h-24 tablet:flex-col tablet:h-60 tablet:p-8 ">
            <div>
                <div className="w-24 h-24 bg-sky-400">
                    {artWork ? <img 
                        src={artWork} alt="artwork" 
                        className='h-full'
                    >
                    </img>:""}
                </div>
            </div>

            <div className="flex w-1/4 justify-between">
                <div>Previous</div>
                <div>Range</div>
                <div>Play</div>
                <div>Next</div>
            </div>

            <div className="flex w-1/4 justify-around">
                <p>Title : {playSongs?.title}</p>
                <p>Artist : {playSongs?.artist}</p>
            </div>

            <div>
                <audio controls autoplay>
                    <source src={song} type="audio/mp3"></source>
                </audio>
            </div>
        </div>
    )
}

export default Player