import { useEffect,useState } from 'react';
import Card from '../Components/Card' 
import  {getMyMusics}  from '../Services/API';

const Content = () => {

    const [MyMusics, setMyMusics] = useState([])

    useEffect(()=>{
        
        getMyMusics().then((res)=>{setMyMusics(res.data)}).catch((err) => console.log(err))

    },[])

    return(
        <div className='grid desktop:grid-cols-3 laptop:grid-cols-2 gap-x-36 gap-y-12'>
           {MyMusics.map((MyMusic, index) => 
            <Card key={index} MyMusic={MyMusic}/>
           )}
        </div>
    )
}

export default Content