import axios from "axios";

export const getMyMusics = async () => {
    return await axios.get('https://allsnapmusics.onrender.com/MyMusic')
}


