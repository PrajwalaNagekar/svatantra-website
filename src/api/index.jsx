import axios from 'axios'
const VITE_BACKEND_LOCALHOST_API_URL = import.meta.env.VITE_BACKEND_API_URL;

const api = axios.create({
    baseURL: VITE_BACKEND_LOCALHOST_API_URL,
});
export const admission = async (payload) => {
    try {
        const res = await api.post('/admission', payload)
        // console.log("🚀 ~ admission ~ res.data:", res)
        return res;
    } catch (error) {
        console.log("error", error)
    }
}

export const bookAVisit = async (payload) => {
    try {
        const res = await api.post('/book-a-visit', payload)
        // console.log("🚀 ~ admission ~ res.data:", res)
        return res;
    } catch (error) {
        // console.log("🚀 ~ bookAVisit ~ error:", error)
        console.log("error", error)

    }
}
export const contact = async (payload) => {
    try {
        const res = await api.post('/contact', payload)
        // console.log("🚀 ~ contact ~ res.data:", res)
    } catch (error) {
        console.log("🚀 ~ contact ~ error:", error)

    }
}


export const teachersTraining = async (payload) => {
    try {
        const res = await api.post('/teacher-training', payload)
        // console.log("🚀 ~ teachersTraining ~ res:", res)

    } catch (error) {
        console.log("🚀 ~ teachersTraining ~ error:", error)

    }
}

export const fetchAllEvents = async () => {
    try {
        const res = await api.get('/all-events')
        return res.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return {
            success: false,
            message: error?.response?.data?.message || 'Failed to fetch events',
        };
    }
}
export const fetchAllImages = async () => {
    try {
        const res = await api.get('/all-images')
        // console.log("🚀 ~ fetchAllImages ~ res:", res)
        return res.data;

    } catch (error) {
        console.error('Error fetching gallery images:', error);
        return { success: false, message: 'Failed to fetch images' };
    }
}