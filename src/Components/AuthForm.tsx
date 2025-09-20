
import { useState } from 'react'
import logo from '/public/logo.svg'


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { tuple, z } from "zod"

import { Button } from "@/Components/UI/Button"
import { Form } from "@/Components/UI/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { BadgeCheck, Loader2 } from 'lucide-react'

import { useAuth } from '@/utils/useAuth'
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsloading] = useState<boolean>(false)
    const { signup, signin } = useAuth()

    const navigate = useNavigate()

    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })


    async function onSubmit(values: z.infer<typeof authFormSchema>) {
        // e.preventDefault()

        // console.log('values', values)

        setIsloading(true)


        if (type === 'signup'){

            const resData = await signup({ name: 'Alice', email: 'a@wwwseedreww.com', password: '12345678' })
    
            if(resData?.status === 201){
                window.alert('Signed up!')
                navigate('/signin')
            }else if (resData.includes('registered')){
                console.log('registered: ', resData)
                window.alert(resData)
            }else{
                console.log('error: ', resData)
            }

        }else{

            const resData = await signin({ email: "adam@coexample.com", password: "123123123" })
            console.log('resData: ', resData)
            
            if (resData?.status === 200){
                console.log('resData: ', resData?.user)

                setUser(resData.data.user)
            }
        }
        
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
                        <BadgeCheck color="#00cccc" size={54} className='w-full'/>
                        <b className='opacity-70'> You're now signed in!</b>
                        <a href='/' className='form-link'>Go to homepage</a>
                    </div>
                    : <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 border-">
                            {type == 'signin' && <CustomInput control={form.control} label="Name" name="name" placeholder="Enter your name" />}                            <CustomInput control={form.control} label="Email" name="email" placeholder="Enter your email" />
                            <CustomInput control={form.control} label="Password" name="password" placeholder="Enter your password" />
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
