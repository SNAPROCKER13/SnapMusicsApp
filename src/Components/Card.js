import oneImage from '../Assets/image/1.jpg'
import twoImage from '../Assets/image/2.jpg'
import theeImage from '../Assets/image/3.jpg'
import fourImage from '../Assets/image/4.jpg'
import fiveImage from '../Assets/image/5.jpg'
import sixImage from '../Assets/image/6.jpg'

const Card = ({MyMusic,setPlayId, play, pause, setIsPlaying}) => {

    const artWork = MyMusic?.art_work == 'oneImage' ? oneImage : 
    MyMusic?.art_work === 'twoImage' ? twoImage : 
    MyMusic?.art_work === 'theeImage' ? theeImage :
    MyMusic?.art_work === 'fourImage' ? fourImage :
    MyMusic?.art_work === 'fiveImage' ? fiveImage :
    MyMusic?.art_work === 'sixImage' ? sixImage : ""

    const onChangeSong = () => {
          pause(); // this will pause the audio
          setIsPlaying(false);
      };

    return (
        <div className="bg-white w-80 flex flex-col justify-center items-center p-4 rounded-lg">
            <div className="bg-sky-400 w-72 h-72 text-center text-white flex justify-center items-center rounded-lg">
                <img 
                    src={artWork} alt="artwork" 
                    className='h-full rounded-lg'
                    onClick={async () =>{
                        await onChangeSong()
                        await setPlayId(MyMusic?.id)
                    }}
                ></img>
            </div>
            <div className="my-6 pt-4">
                <h1>{MyMusic?.title}</h1>
            </div>
            <div className=""></div>
            <div className=""></div>
        </div>
    )
}

export default Card