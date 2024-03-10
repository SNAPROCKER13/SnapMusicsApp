import Header from '../Components/Header'
import Content from '../Components/Content'

const Home = () => {

    return(
        <div className="h-full flex flex-col items-center">
            <Header/>
            <div className='my-12'>
                <input className="border-2 border-black-300 rounded-lg border-2  mx-12" placeholder='ค้นหา'/>
                <button className='border-2 border-black-300 rounded-lg bg-sky-400 text-white border-2 '>ค้นหา</button>
            </div>
            <Content/>
        </div>
    )

}

export default Home