import axios from "axios";
axios.defaults.baseURL = 'https://6376b71081a568fc2504f4d3.mockapi.io'
export async function fetchReviews() {
    try {
        const { data } = await axios.get('/reviews')
       
        return data
    } catch (er) {
        console.log(er);
    }

}

export async function setReview(obj) {
    try {
        const { data } = await axios.post('/reviews', obj)
        
        return data
    } catch (er) {
        console.log(er);
    }

}