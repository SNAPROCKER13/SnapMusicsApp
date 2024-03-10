const Card = ({MyMusic}) => {
    return (
        <div className="bg-white w-80 flex flex-col justify-center items-center p-4 rounded-lg">
            <div className="bg-sky-400 w-72 h-72 text-center text-white flex justify-center items-center rounded-lg">
                <h1>{MyMusic.art_work}</h1>
            </div>
            <div className="my-6 pt-4">
                <h1>{MyMusic.title}</h1>
            </div>
            <div className=""></div>
            <div className=""></div>
        </div>
    )
}

export default Card