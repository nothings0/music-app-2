import axios from 'axios'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authslice'

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('http://localhost:3000/v1/auth/login', user);
        dispatch(loginSuccess(res.data))
        navigate('/')
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post("http://localhost:3000/v1/auth/register", user)
        dispatch(registerSuccess())
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed())
    }
}
