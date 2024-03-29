import { Link, useNavigate} from "react-router-dom";
import {useState} from 'react'
import bcrypt from "bcryptjs";
import { getUsers } from '../services/PostUserAPI'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState({
        userInput : false,
        passInput : false,
        failed : false,
    })

    const onUser = (e) => {
        console.log(e.target.value)
        let userName = e.target.value
        setUser(userName)
    }

    const onPassword = (e) => {
        console.log(e.target.value)
        let pass = e.target.value
        setPassword(pass)
    }

    const onLogin = async () => {

        if(password === "" && user === ""){
            setValidate({
                userInput : true,
                passInput : true,
            })
        }
        if(password !== "" && user === ""){
            setValidate({
                userInput : true,
                passInput : false,
            })
        }
        if(password === "" && user !== ""){
            setValidate({
                userInput : false,
                passInput : true,
            })
        }
        if(password !== "" && user !== ""){
            setValidate({
                userInput : false,
                passInput : false,
            })

            const dataUser = await getUsers().then((res)=>
                res.data
            ).catch(
                (err) => console.log(err)
            )

            const userFilter = await dataUser.filter(item => {
                if(user === item?.username){
                    return item
                }
            });

            console.log(userFilter[0])

            if(userFilter[0] !== undefined){
                const match = await bcrypt.compare(password, userFilter[0].password)
                if(match === true){
                    setIsLoading(true)
                    localStorage.setItem("isLogin",true)
                    window.location.reload()
                }else{
                    setValidate({failed : true})
                }
            }else{
                setValidate({failed : true})
            }
        }
    }

    const onEnter = (e) => {
        if (e.key === "Enter"){
            onLogin()
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">

            <div className="my-10">
                <h1 className="text-sky-400 text-center font-bold desktop:text-3xl laptop:text-2xl">SNAPMUSICS</h1>
            </div>
          
            <div className="w-2/5 bg-white flex flex-col items-center rounded-xl border-2 border-black">
                <div className="bg-sky-400 py-4 w-full rounded-lg border-2 border-black">
                    <p className="text-white text-center">Sign-in</p>
                </div>
                {validate.failed === true ? <p className="text-red-500 mt-5">ชื่อผู้ใช้ / รหัสผ่าน ไม่ถูกต้อง !</p> : ""}
                <input onChange={(e)=>onUser(e)} onKeyDown={(e) => {onEnter(e)}}  placeholder="ชื่อผู้ใช้" className={validate.userInput === true ? "w-1/2 border-2 border-black mt-5 rounded-md" : "w-1/2 border-2 border-black my-5 rounded-md"} type="text"/>
                {validate.userInput === true ? <p className="text-red-500 mb-5">กรุณากรอกชื่อผู้ใช้ !</p> : ""}
                <input onChange={(e)=>onPassword(e)} onKeyDown={(e) => {onEnter(e)}}  placeholder="รหัสผ่าน" className={validate.passInput === true ? "w-1/2 border-2 border-black rounded-md": "w-1/2 border-2 border-black rounded-md mb-5"} type="password"/>
                {validate.passInput === true ?<p className="text-red-500 mb-5">กรุณากรอกรหัสผ่าน !</p> :""}             
                <button 
                onClick={()=>onLogin()}  
                className='border-2 rounded-lg bg-sky-400 text-white mb-5'>ยืนยัน</button>
                <Link to="/register"><p className="text-sky-400 mb-5">Sign-Up</p></Link>
            </div>
            {isLoading ? <div className="w-full h-screen fixed z-10 flex justify-center items-center" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
                <h1 className="text-white animate-pulse">Loading...</h1>
            </div>:""}
        </div>
    )
}

export default Login