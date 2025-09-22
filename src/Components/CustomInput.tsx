import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import type { Control, FieldPath } from "react-hook-form"
import { Input } from '@/components/ui/input'
import type { authFormSchema } from "@/lib/utils"
import type z from "zod"

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string,
}


const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>

                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>

                    <div className='w-full flex-col'>

                        <FormControl>

                            <Input
                                id={name}                // set unique id here
                                placeholder={placeholder}
                                className='input-class'
                                {...field}
                                type={name === 'password' ? 'password' : 'text'}
                            />

                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput
