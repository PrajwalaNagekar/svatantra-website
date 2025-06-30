import axios from 'axios'
const VITE_BACKEND_LOCALHOST_API_URL = import.meta.env.VITE_BACKEND_API_URL;

const api = axios.create({
    baseURL: VITE_BACKEND_LOCALHOST_API_URL,
});
export const admission = async (payload) => {
    try {
        const res = await api.post('/admission', payload)
        console.log("🚀 ~ admission ~ res.data:", res)
        return res;
    } catch (error) {
        console.log("error", error)
    }
}

export const bookAVisit = async (payload) => {
    try {
        const res = await api.post('/book-a-visit', payload)
        console.log("🚀 ~ admission ~ res.data:", res)
        return res;
    } catch (error) {
        console.log("🚀 ~ bookAVisit ~ error:", error)
        console.log("error", error)

    }
}
export const contact = async (payload) => {
    try {
        const res = await api.post('/contact', payload)
        console.log("🚀 ~ contact ~ res.data:", res)
    } catch (error) {
    console.log("🚀 ~ contact ~ error:", error)

    }
}