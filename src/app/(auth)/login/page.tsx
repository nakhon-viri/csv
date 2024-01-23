import { signIn } from '@/auth'
import React from 'react'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div>
      <form action={async () => {
        'use server'
        await signIn("credentials", {
          email: 'email@example.com',
          password: 'password',
          redirectTo: '/',
        })
      }}>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default LoginPage