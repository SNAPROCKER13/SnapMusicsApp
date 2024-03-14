import { useEffect,useState } from 'react';
import Header from '../Components/Header'
import Content from '../Components/Content'
import Player from '../Components/Player'

//MyMusic
import  {getMyMusics}  from '../services/GetMyMusicsAPI';

const Home = () => {

    const [MyMusics, setMyMusics] = useState([])
    const [playId, setPlayId] = useState(0)
    const [searchResult, setSearchResult] = useState([])
    const [text, setText] = useState("")

    useEffect(()=>{
        
        getMyMusics().then((res)=>{
            setMyMusics(res.data)
            setSearchResult(res.data)
        }).catch((err) => console.log(err)
        )

    },[])

    const handleSearch = (e) => {

        const value = e.target.value
        setText(value)

    } 

    const handleFind = () => {

        if(text != ""){

            getMyMusics().then((res)=>{
                const arr =  []
                const result = res.data.map((item) => {
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

    console.log(MyMusics)

    return(
        <div className="h-full flex flex-col items-center">
            <div className='w-full'>
                <Header/>
            </div>
            <div className='my-12 w-full text-center'>
                <input onChange={(e) => handleSearch(e)} className="border-2 border-black-300 rounded-lg border-2 mx-6 w-6/12" placeholder='  ค้นหา'/>
                <button onClick={() => handleFind()} className='border-2 border-black-300 rounded-lg bg-sky-400 text-white border-2 '>ค้นหา</button>
            </div>
            <div className='w-full h-screen'>
                <Content searchResult={searchResult} setPlayId={setPlayId}/>
            </div>
            <div className='w-full'>
                <Player MyMusics={MyMusics} playId={playId}/>
            </div>
        </div>
    )

}

export default Home