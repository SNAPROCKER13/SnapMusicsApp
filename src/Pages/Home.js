import { useEffect,useState } from 'react';
import Header from '../Components/Header'
import Content from '../Components/Content'
import Player from '../Components/Player'

//useSound
import useSound from "use-sound"; // for handling the sound

//MyMusic
import  {getMyMusics}  from '../services/GetMyMusicsAPI';

//image and songs
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

const Home = () => {

    const [MyMusics, setMyMusics] = useState([])
    const [playId, setPlayId] = useState(1)
    const [searchResult, setSearchResult] = useState([])
    const [text, setText] = useState("")
    const [playSongs, setPlaySongs] = useState(MyMusics[0])
    const [artWorkSong, setArtWorkSong] = useState(oneImage)
    const [song, setSong] = useState(lovesecret)
    const [play, { pause, duration, sound }] = useSound(song);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {

        const selectSong = async () => {

            const MyMusic = await MyMusics.map((item) => {

                if(item?.id == playId){
                   return (item)
                }
        
            })
    
            await setPlaySongs(MyMusic[playId-1])
    
            const artWork = playSongs?.art_work == 'oneImage' ? oneImage : 
            playSongs?.art_work === 'twoImage' ? twoImage : 
            playSongs?.art_work === 'theeImage' ? theeImage :
            playSongs?.art_work === 'fourImage' ? fourImage :
            playSongs?.art_work === 'fiveImage' ? fiveImage :
            playSongs?.art_work === 'sixImage' ? sixImage : ""
    
           await setArtWorkSong(artWork)
    
            const song =  playSongs?.file_music == 'lovesecret' ? lovesecret : 
            playSongs?.file_music === 'forget' ? forget : 
            playSongs?.file_music === 'again' ? again :
            playSongs?.file_music === 'fool' ? fool :
            playSongs?.file_music === 'reason' ? reason :
            playSongs?.file_music === 'brain' ? brain : ""
    
           await setSong(song)

           if (isPlaying) {
                play()// this will play the audio
                setIsPlaying(true);
            }

        }

        selectSong()

    },[playSongs,playId,song])

    useEffect(()=>{

        getMyMusics().then( async (res)=>{
            await setMyMusics(res.data)
            await setPlaySongs(res.data[0])
            await setSearchResult(res.data)
        }).catch((err) => console.log(err))

        pause()

    },[])

    const handleSearch = (e) => {

        const value = e.target.value
        setText(value)

    } 

    const handleFind = () => {

        if(text != ""){

            getMyMusics().then( async (res)=>{
                const arr =  []
                await res.data.map((item) => {
                    if(item?.title?.includes(text)){
                        arr.push(item)
                        return arr
                    }
                })
    
                setSearchResult(arr)
    
            }).catch((err) => console.log(err)
            )
    
        }else{
            setSearchResult(MyMusics)
        }

      
    }

    const onEnter = (e) => {
        if (e.key === "Enter"){
            handleFind()
        }
    }

    return(
        <div className={searchResult.length > 0 ? "h-full flex flex-col items-center" : "h-lvh flex flex-col items-center"}>
            <div className='w-full'>
                <Header pause={pause} />
            </div>
            <div className='my-12 w-full text-center'>
                <input onChange={(e) => handleSearch(e)} onKeyDown={(e) => {onEnter(e)}} className="border-2 border-black-300 rounded-lg border-2 mx-6 w-6/12" placeholder='  ค้นหา'/>
                <button onClick={() => handleFind()} className='border-2 border-black-300 rounded-lg bg-sky-400 text-white border-2 '>ค้นหา</button>
            </div>
            <div className={'h-full'}>
                <Content searchResult={searchResult} setPlayId={setPlayId} play={play} pause={pause} setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
            </div>
            <div className='w-full'>
                <Player artWorkSong={artWorkSong} song={song} playSongs={playSongs} playId={playId} play={play} pause={pause} duration={duration} sound={sound} setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
            </div>
        </div>
    )

}

export default Home