const Player = () => {
    return(
        <div className="flex items-center justify-between w-full bg-white flex-row border-2 border-black px-12 h-24">
            <div>
                <div className="w-24 h-24 bg-sky-400"></div>
            </div>

            <div className="flex w-1/4 justify-between">
                <div>Previous</div>
                <div>Range</div>
                <div>Play</div>
                <div>Next</div>
            </div>

            <div className="flex w-1/4 justify-around">
                <p>Title : {}</p>
                <p>Artist : {}</p>
            </div>
        </div>
    )
}

export default Player