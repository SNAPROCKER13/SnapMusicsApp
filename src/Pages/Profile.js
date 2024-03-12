import Header from '../Components/Header'

const Profile = () => {

    return(
        <div>
            <Header/>
            <div className="flex justify-center items-center h-screen">
                <div className="w-2/5 bg-white flex flex-col justify-center items-center rounded-xl border-2 border-black">
                    <div className="bg-sky-400 py-4 w-full rounded-lg border-2 border-black" >
                        <p className="text-white text-center">Profile</p>
                    </div>
                    <div className="bg-sky-400 rounded-full mt-14 mb-6 text-white w-16 h-16 flex justify-center items-center">Photo</div>
                    <h2 className='mb-14 font-bold'>SNAPROCKER</h2>
                    <button className='border-2 border-black rounded-lg bg-sky-400 text-white border-black mb-5 rounded-md' type="submit">บันทึก</button>
                </div>
            </div>
        </div>
    )
}

export default Profile