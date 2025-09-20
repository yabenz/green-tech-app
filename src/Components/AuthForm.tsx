
import { useState } from 'react'
import logo from '/public/logo.svg'


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/Components/UI/button"
import { Form } from "@/Components/UI/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsloading] = useState<boolean>(false)

    // 1. Define your form.
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        setIsloading(true)
        await wait(2000)
        window.alert('Signed in')
        setIsloading(false)
    }


    async function wait(ms: number) {

        console.log('Signin up...');
        await new Promise((resolve) => setTimeout(resolve, ms))
    }




    return (
        <div className='flex flex-center h-dvh bg-[var(--ghost)]'>
            <div className='flex flex-col w-full max-w-100 py-10 bg-white p-10 rounded-2xl mt-[-5%]'>
                <header className="flex-col gap-3">
                    <div className='flex-center gap-2'>
                        <a href='/'><img src={logo} className='max-w-[43px]' /></a>
                        <div className='font-bold text-primary'>GreenTechIO</div>
                    </div>
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
                    ? <div> Signed success!</div>
                    : <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 border-">
                            {type === 'signin' && <CustomInput control={form.control} label="Name" name="name" placeholder="Enter your name" />}
                            <CustomInput control={form.control} label="Email" name="email" placeholder="Enter your email" />
                            <CustomInput control={form.control} label="Password" name="password" placeholder="Enter your password" />
                            <Button type="submit" className='button-form w-full mt-4' disabled={isLoading}>
                                {isLoading ?
                                <>
                                <Loader2 size={20} className='animate-spin' />
                                Loading...
                                </>
                                : type === 'signin' ? <div>Sign In </div> : <div>Sign Up </div>
                                }
                                </Button>
                        </form>

                        {type === 'signup' 
                        ? <div className='flex-center pt-4'> Already have an account ? <a href='/signin' className='form-link'> &nbsp; Sign in </a> </div>
                        : <div className='flex-center pt-4'> Don't have an account ? <a href='/signup' className='form-link'>&nbsp; Sign up </a></div>}
                    </Form>
                }
            </div>
        </div>
    )
}

export default AuthForm
