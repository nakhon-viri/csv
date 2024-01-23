"use server";

import { createUser } from "@/data/create-user"
export const newUser = () => {
    console.log('111', 111)
    createUser().then(res => {
        console.log('res', res)
    })


}