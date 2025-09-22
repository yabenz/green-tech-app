
import logo from '/public/logo.svg'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from './CustomInput'
import { BadgeCheck, Loader2, MessageCircleWarning } from 'lucide-react'

import { useAuth } from '@/utils/useAuth'
import { useNavigate } from 'react-router-dom';
import type { User } from '@/types/types'
import { signUpSchema, signInSchema } from '@/lib/utils'
import { useAuthStore } from '@/stores/authStore'

type AuthFormData = z.infer<typeof signUpSchema> | z.infer<typeof signInSchema>

const AuthForm = ({ type }: { type: string }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null)
    const [message, setMessage] = useState('')
    const [isLoading, setIsloading] = useState<boolean>(false)
    const { signup, signin } = useAuth()
    const userData = useAuthStore(state => state.userData)

    const formSchema = type=== 'signup' ? signUpSchema : signInSchema

    const defaultValues =
        type === 'signup'
            ? { name: '', email: '', password: '' }
            : { email: '', password: '' };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    async function onSubmit(formData: AuthFormData) {

        setMessage('')
        console.log('formData', formData)

        setIsloading(true)
        await wait(1000)

        // Handling Sign Up
        if (type === 'signup') {
            const resData = await signup(formData as z.infer<typeof signUpSchema>)

            if (resData?.status === 201) {
                window.alert("You're now signed up!")
                navigate('/signin')
            } 
            if (resData.includes('registered')) {
                setMessage(resData)
            } else {
                console.log('error: ', resData)
            }

        } else {
            
            // Handling Sign In
            const resData = await signin(formData as z.infer<typeof signInSchema>)
            console.log('resData: ', resData)

            if (resData?.status === 200) {

                const { name, email } = resData?.data.user
                useAuthStore.getState().setSessionToken('token123')
                useAuthStore.getState().setUserData({ name, email })

                setUser(resData.data.user)
            }
            if (resData.includes('credentials')) {
                setMessage(resData)
            } else {
                console.log('error: ', resData)
            }
        }
        setIsloading(false)
    }


    async function wait(ms: number) {
        await new Promise((resolve) => setTimeout(resolve, ms))
    }



        if (userData && !user) {
        return (
            <div className="flex-col flex-center gap-4 h-screen bg-gray-50">
                <div className="flex-col flex-center gap-4 bg-white rounded-2xl py-20 px-40">
                    <MessageCircleWarning className="text-red-400 " size={55} />
                    <b>You are already logged in!</b>
                    <p className="opacity-30">-------</p>
                    <a href='/dashboard' className='form-link'>&rarr; Go to your Dashboard </a>
                </div>
            </div>
            )
    }

    return (
        <div className='flex flex-center h-dvh bg-[var(--ghost)]'>
            <div className='flex flex-col w-full max-w-100 py-10 bg-white p-10 rounded-2xl mt-[-5%]'>
                <header className="flex-col gap-3">
                    <a href='/'>
                        <div className='flex-center gap-2'>
                            <img src={logo} className='max-w-[43px]' />
                            <div className='font-bold text-primary'>GreenTechIO</div>
                        </div>
                    </a>
                    <div className="flex-col py-4">
                        <h1 className='text-24 lg:text-36 font-bold text-gray-900'>
                            {type === 'signin'
                                ? 'Sign in'
                                : 'Sign up '}
                        </h1>
                        <p className='text-16 font-normal text-gray-600'>
                            Please enter your details to get started
                        </p>
                    </div>
                </header>
                {user
                    ? <div className='flex-col flex-center w-full gap-4 p-10'>
                        <BadgeCheck color="#00cccc" size={54} className='w-full' />
                        <b className='opacity-70'> You're now signed in!</b>
                        <a href='/dashboard' className='form-link'>&rarr; Go to your Dashboard </a>
                    </div>
                    : <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 border-">

                            {type === 'signup' && <CustomInput control={form.control} label="Name" name="name" placeholder="Enter your name" />}
                            <CustomInput control={form.control} label="Email" name="email" placeholder="Enter your email" />
                            <CustomInput control={form.control} label="Password" name="password" placeholder="Enter your password" />

                            {message !== '' && <div className='bg-red-200 text-red-700 py-1 px-2 rounded-sm'>{message}</div>}
                            <Button type="submit" className='button-form w-full mt-4' disabled={isLoading}>
                                {isLoading ?
                                    <>
                                        <Loader2 size={20} className='animate-spin' />
                                        Loading...
                                    </>
                                    : type === 'signin' ? <>Sign In</> : <>Sign Up</>
                                }
                            </Button>
                        </form>

                        {type === 'signup'
                            ? <div className='flex-center py-2'> Already have an account ? <a href='/signin' className='form-link'> &nbsp; Sign in </a> </div>
                            : <div className='flex-center py-2'> Don't have an account ? <a href='/signup' className='form-link'>&nbsp; Sign up </a></div>
                        }
                    </Form>
                }
            </div>
        </div>
    )
}

export default AuthForm
