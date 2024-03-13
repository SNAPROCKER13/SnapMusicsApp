import Card from './Card' 

const Content = ({MyMusics,setPlayId}) => {

    return(
        <div 
            className='grid desktop:grid-cols-3 laptop:grid-cols-2 gap-x-36 gap-y-12 desktop:pb-36 laptop:pb-36 tablet:pb-72' 
        >
           {MyMusics.map((MyMusic, index) => 
            <Card key={index} MyMusic={MyMusic} setPlayId={setPlayId} />
           )}
        </div>
    )
}

export default Content