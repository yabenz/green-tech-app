
import { useState } from 'react'
import logo from '/public/logo.svg'


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsloading] = useState<boolean | null>(null)

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
        <div className='flex flex-col gap-10 max-sm:p-6 border-2'>

            <header className="flex-col gap-3">
                <div className='flex-center'>
                    <a href='/'><img src={logo} className='max-w-[43px]' /></a>
                    <div className='bold'>GreenTechIO</div>
                </div>

                <div className="flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-36 font-bold text-gray-900'>
                        {user
                            ? 'Sign in'
                            : 'Sign up '}
                    </h1>
                    <p className='text-16 font-normal text-gray-600'>
                        Please enter your details to get started
                    </p>
                </div>
            </header>

            {user
                ? <div className=''> Signed success!</div>
                : <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <CustomInput control={form.control} label="Email" name="email" placeholder="Enter your email" />
                        <CustomInput control={form.control} label="Password" name="password" placeholder="Enter your password" />

                        <Button type="submit" className='button-form w-full' disabled={isLoading}>
                            {isLoading ? 
                            <>
                            <Loader2 size={20} className='animate-spin' />
                            Loading...
                            </>
                            : user ? <div>Sign In </div> : <div>Sign Up </div> 
                            }
                            </Button>
                    </form>
                </Form>
            }
        </div>
    )
}

export default AuthForm
