import { newUser } from '@/actions/auth/register'
import React from 'react'

type Props = {}

const RegisterPage = (props: Props) => {
    return (
        <form action={async () => {
            'use server'
            newUser()
        }}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button>submit</button>
        </form>
    )
}

export default RegisterPage