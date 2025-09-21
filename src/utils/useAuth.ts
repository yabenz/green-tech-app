import axios from 'axios'
import { z } from 'zod'

import {signUpSchema, signInSchema} from '@/lib/utils'


const API_BASE_URL = 'http://localhost:3001/api';


export function useAuth() {

    // Signup function
    const signup = async (formData:  z.infer<typeof signUpSchema>) => {

        try {
            const response = await axios.post(`${API_BASE_URL}/signup`, formData);
            return response

        } catch (err) {
            if (axios.isAxiosError(err)) {
                return err.response?.data?.error || err?.request || err.message

            } else {
                return err
            }
        }
    };

    // Signin function
    const signin = async (formData:  z.infer<typeof signInSchema>) => {

        try {
            const response = await axios.post(`${API_BASE_URL}/signin`, formData)
            return response

        } catch (err) {
            if (axios.isAxiosError(err)) {
                return err.response?.data?.error || err?.request || err.message

            } else {
                return err
            }
        }
    }

    return { signup, signin };
}
