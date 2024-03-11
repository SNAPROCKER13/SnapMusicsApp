const Player = () => {
    return(
        <div className="px-14 flex items-center justify-between">
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