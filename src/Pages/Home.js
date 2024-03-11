import Header from '../Components/Header'
import Content from '../Components/Content'
import Player from '../Components/Player'

const Home = () => {

    return(
        <div className="h-full flex flex-col items-center">
            <Header/>
            <div className='my-12 w-full text-center'>
                <input className="border-2 border-black-300 rounded-lg border-2 mx-6 w-6/12" placeholder='  ค้นหา'/>
                <button className='border-2 border-black-300 rounded-lg bg-sky-400 text-white border-2 '>ค้นหา</button>
            </div>
            <Content/>
            <div className='bg-white w-full border-2 border-black'>
                <Player/>
            </div>
        </div>
    )

}

export default Home