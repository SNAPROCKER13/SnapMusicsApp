import axios from "axios";

export const getMyMusics = () => {
    return axios.get('https://allsnapmusics.onrender.com/MyMusic')
}
