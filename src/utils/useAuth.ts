import axios from 'axios'
import { useState } from 'react'
import { authFormSchema } from '@/lib/utils'
import { z } from "zod"


const API_BASE_URL = 'http://localhost:3001/api';

type SignupFuncProps = {
    formData: z.infer<typeof authFormSchema>
}

export function useAuth() {

    // Signup function
    const signup = async (formData: SignupFuncProps) => {

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
    const signin = async (formData: SignupFuncProps) => {

        console.log('Error eweweweew')


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
