const Player = () => {
    return(
        <div className="px-12 border-2 border-black flex fixed  bottom-0 items-center justify-between w-full bg-white desktop:flex-row desktop:h-24 laptop:flex-row laptop:h-24 tablet:flex-col tablet:h-64 tablet:p-8 ">
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