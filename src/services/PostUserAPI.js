import axios from "axios";
import bcrypt from "bcryptjs";

export const postUsers = async (user,password) => {
    const saltRounds = 10;
    const myPlaintextPassword = 'npas';

    const username = user
    const passwordEncode = password
    const hashedPassword = bcrypt.hashSync(passwordEncode, saltRounds ,myPlaintextPassword ) // hash created previously created upon sign up

    const users = await getUsers().then((res)=>res).catch((err) => console.log(err))

    return await axios.post('https://userssnapmusics.onrender.com/Users',{
        id: users.data.length + 1,
        username: username,
        password: hashedPassword,
    })
}

export const getUsers = async () => {
    return await axios.get('https://userssnapmusics.onrender.com/Users')
}