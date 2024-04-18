import React, { useDebugValue, useEffect, useState } from "react"
import { getCompanyData } from "./Constants"

export const CreateNewCompany = () => {

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 15)
            return;
        setLogin(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 25)
            return;
        setPassword(event.target.value);
    }
    const handlePassword2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 25)
            return;
        setPassword2(event.target.value);
    }

    const handleCreate = () => {
        if (login.length < 6)
            return;
        // print some info that login need to be longer than 6 digits 

        if (password.length < 8) {
            return;
            // print some info that password need to be longer 
        }

        if (password != password2) {
            return;
            // print info that those values are not equal 
        }

        console.log("create clicled Login: " + login + " password: " + password);
        // push data to server and wait for return 
        // if return will be positive hide this window and open company screen 
        // where will be place to select company and to add company 
    }

    return (
        <section id="CreateNew">
        <div className="fixed w-screen h-screen justify-center content-center" >
            <div className="flex flex-col bg-stone-700">
                
                <div className="text-center">
                Create new account:
                </div>
                <div className="flex flex-row gap-4 justify-center content-center p-2">
                    <div className="px-2"> Your Login:   </div>
                    <input className="text-center rounded-xl px-1 border-2 border-stone-400"
                        type="login"
                        id="lif"
                        value={login}
                        onChange={handleLogin}
                        maxLength={15}
                    />
                </div>

                <div className="flex flex-row gap-4 justify-center content-center p-2">
                    <div className="px-2"> Your Password:   </div>
                    <input className="text-center rounded-xl px-1 border-2 border-stone-400"
                        type="password"
                        id="sdf"
                        value={password}
                        onChange={handlePassword}
                        maxLength={25}
                    />
                </div>

                <div className="flex flex-row gap-4 justify-center content-center p-2">
                    <div className="px-2"> repeat password:   </div>
                    <input className="text-center rounded-xl px-1 border-2 border-stone-400"
                        type="password"
                        id="agw"
                        value={password2}
                        onChange={handlePassword2}
                        maxLength={25}
                    />
                </div>

                <div className="flex justify-center content-center p-2">
                    <button className="p-2 rounded-2xl bg-stone-600 hover:bg-stone-600/75"
                        onClick={handleCreate}>
                        Create
                    </button>
                </div>

            </div>
        </div>
        </section>
    )
}