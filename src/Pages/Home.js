import Header from '../components/Header'
import Content from '../components/Content'
import Player from '../components/Player'

const Home = ({setIsLogin}) => {

    return(
        <div className="h-full flex flex-col items-center">
            <div className='w-full'>
                <Header  setIsLogin={setIsLogin}/>
            </div>
            <div className='my-12 w-full text-center'>
                <input className="border-2 border-black-300 rounded-lg border-2 mx-6 w-6/12" placeholder='  ค้นหา'/>
                <button className='border-2 border-black-300 rounded-lg bg-sky-400 text-white border-2 '>ค้นหา</button>
            </div>
            <div className=''>
                <Content/>
            </div>
            <div className='w-full'>
                <Player/>
            </div>
        </div>
    )

}

export default Home