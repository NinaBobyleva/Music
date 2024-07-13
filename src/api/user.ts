import { createAsyncThunk } from "@reduxjs/toolkit";

const USER_URL = "https://skypro-music-api.skyeng.tech/user/";

type UserProp = {
    email: string,
    password: string,
}

export const getUser = createAsyncThunk(
    "user/getUser",
    async ({email, password}: UserProp) => {
        const res = await fetch(`${USER_URL}login/`, {
            method: "POST",
            body: JSON.stringify({
            email,
            password,
            }),
            headers: {
            "content-type": "application/json",
            },
        })
        const json = await res.json();
        console.log(json);

        if (!res.ok) {
            throw new Error(json.detail);
        }

        return json;
    }
);

// export const signUp = createAsyncThunk(
//     "user/getUser",
//     async ({email, password, username}) => {
//         const res = await fetch(`${USER_URL}signup/`, {
//             method: "POST",
//             body: JSON.stringify({
//             email,
//             password,
//             username,
//             }),
//             headers: {
//             "content-type": "application/json",
//             },
//         })
//         const json = await res.json();
//         console.log(json);

//         if (!res.ok) {
//             throw new Error(json.detail);
//         }

//         return json;
//     }
// );

export async function signup({email, password}: UserProp) {
    const res = await fetch(`${USER_URL}signup/`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            username: email,
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    console.log(res);
    return res.json();
}