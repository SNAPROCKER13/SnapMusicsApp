import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className="w-full bg-white flex flex-row border-2 border-black items-center justify-between px-12 h-24">
            <div onClick={() => {
                navigate('/') 
                window.location.reload() 
                }} 
                className=""
            >
                <h1 className="desktop:text-3xl labtop:text-xl text-sky-400 font-bold cursor-pointer">SNAPMUSICS</h1>
            </div>
            <div className="flex flex-row justify-center items-center">
                {location.pathname !== '/profile' ? <Link to="/profile"><div className="bg-white rounded-full my-14 w-16 h-16 flex justify-center items-center border-2 border-black mx-6">Profile</div></Link>: <button onClick={() => navigate(-1)} className="border-2 border-black rounded-lg h-max w-max text-black mx-6">Back</button>}
                <button onClick={() => {
                    localStorage.removeItem("isLogin")
                    navigate("/")
                    window.location.reload()
                }}
                className="border-2 bg-sky-400 rounded-lg h-max w-max text-white">Log Out</button>
            </div>
        </div>
    )
}

export default Header