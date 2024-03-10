import { useEffect,useState } from 'react';
import Card from '../Components/Card' 
import  {getMyMusics}  from '../Services/API';

const Content = () => {

    const [MyMusics, setMyMusics] = useState([])

    useEffect(()=>{
        
        getMyMusics().then((res)=>{setMyMusics(res.data)}).catch((err) => console.log(err))

    },[])

    return(
        <div className='grid grid-cols-3 gap-x-64 gap-y-32'>
           {MyMusics.map((MyMusic, index) => 
            <Card key={index} MyMusic={MyMusic}/>
           )}
        </div>
    )
}

export default Content