import { Link, useNavigate} from "react-router-dom";
import {useState} from 'react'

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [validate, setValidate] = useState({
        userInput : false,
        passInput : false,
        rePassInput : false,
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
    const onRePassword = (e) => {
        console.log(e.target.value)
        let rePass = e.target.value
        setRePassword(rePass)
    }

    const onRegister = () => {
        console.log("click")

        if(password == "" && user == "" && rePassword == ""){
            setValidate({
                userInput : true,
                passInput : true,
                rePassInput : true,
            })
        }
        if(password != "" && user == "" && rePassword == ""){
            setValidate({
                userInput : true,
                passInput : false,
                rePassInput : true,
            })
        }
        if(password == "" && user != "" && rePassword == ""){
            setValidate({
                userInput : false,
                passInput : true,
                rePassInput : true,
            })
        }
        if(password == "" && user == "" && rePassword != ""){
            setValidate({
                userInput : true,
                passInput : true,
                rePassInput : false,
            })
        }
        if(password != "" && user != "" && rePassword == ""){
            setValidate({
                userInput : false,
                passInput : false,
                rePassInput : true,
            })
        }
        if(password == "" && user != "" && rePassword != ""){
            setValidate({
                userInput : false,
                passInput : true,
                rePassInput : false,
            })
        }
        if(password != "" && user == "" && rePassword != ""){
            setValidate({
                userInput : true,
                passInput : false,
                rePassInput : false,
            })
        }
        if(password != "" && user != "" && rePassword != ""){
            setValidate({
                userInput : false,
                passInput : false,
                rePassInput : false
            })

            if(password == rePassword){
                localStorage.setItem('user', JSON.stringify({
                    username: user,
                    password: password,
                }))
                navigate('/')
            }else{
                setValidate({failed : true})
            }
           
        }
    }

    const onEnter = (e) => {
        if (e.key == "Enter"){
            onRegister()
        }
    }

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 bg-white flex flex-col justify-center items-center rounded-xl border-2 border-black">
                <div className="bg-sky-400 py-4 w-full rounded-lg border-2 border-black" >
                    <p className="text-white text-center">Sign-up</p>
                </div>
                
                <div className="bg-sky-400 rounded-full my-14 text-white w-16 h-16 flex justify-center items-center">Photo</div>
                {validate.failed == true ? <p className="text-red-500 mt-5">ชื่อผู้ใช้ / รหัสผ่าน ไม่ถูกต้อง !</p> : ""}
                <input placeholder="ชื่อผู้ใช้" onChange={(e)=>onUser(e)} onKeyDown={(e) => {onEnter(e)}} className={validate.userInput == true ? "w-1/2 border-2 border-black mt-5 rounded-md" : "w-1/2 border-2 border-black my-5 rounded-md"} type="text"/>
                {validate.userInput == true ? <p className="text-red-500 mb-5">กรุณากรอกชื่อผู้ใช้ !</p> : ""}
                <input placeholder="รหัสผ่าน" onChange={(e)=>onPassword(e)} onKeyDown={(e) => {onEnter(e)}} className={validate.passInput == true ? "w-1/2 border-2 border-black mt-5 rounded-md" : "w-1/2 border-2 border-black my-5 rounded-md"} type="password"/>
                {validate.passInput == true ? <p className="text-red-500 mb-5">กรุณากรอกรหัสผ่าน !</p> : ""}
                <input placeholder="ยืนยันรหัสผ่าน" onChange={(e) => onRePassword(e)} onKeyDown={(e) => {onEnter(e)}} className={validate.rePassInput == true ? "w-1/2 border-2 border-black mt-5 rounded-md" : "w-1/2 border-2 border-black my-5 rounded-md"} type="password"/>
                {validate.rePassInput == true ? <p className="text-red-500 mb-5">กรุณากรอกยืนยันรหัสผ่าน !</p> : ""}
                <button onClick={() => onRegister()} className='border-2 rounded-lg bg-sky-400 text-white mb-5 rounded-md'>ยืนยัน</button>
                <Link to="/"><button className='border-2 border-black rounded-lg bg-white text-black  mb-5' >ยกเลิก</button></Link>
            </div>
        </div>
    )
}

export default Register