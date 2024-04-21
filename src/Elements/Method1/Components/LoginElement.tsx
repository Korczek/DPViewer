import React, { useState } from "react"
// import { loadingBar } from "./loadingBar";
import { verifyLogin } from "./Communication";

interface LoginData {
    onLoginReturn: (returnCode: number, userID: string) => void;
}

export const LogIn: React.FC<LoginData> = ({ onLoginReturn }) => {

    const [log, setLogin] = useState<string>("login");
    const [pass, setPassword] = useState<string>("password");
    const [rc, setRC] = useState(-1);


    const handleClickLogin = () => {
        if (log == "login")
            setLogin("");
    };
    const handleClickPassword = () => {
        if (pass == "password")
            setPassword("");
    };

    const handleL = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 15) {
            setLogin(event.target.value);
        }
    };

    const handleP = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 25) {
            setPassword(event.target.value);
        }
    };

    interface LoginData {
        Login: string;
        Password: string;
    }

    const handleLogIn = () => {

        if(log == "login" && pass == "password" || 
            log == "login" || pass == "password"){
            setRC(3);
            return;
        }

        const ld: LoginData = {
            Login: log,
            Password: pass
        };

        verifyLogin(ld)
            .then((lrd) => {
                if (lrd == null) {
                    throw Error("wrong return");
                }
                console.log(lrd)
                if (lrd.returnCode == 0) {
                    console.log(lrd.UserID);
                    onLoginReturn(lrd.returnCode, lrd.UserID);
                }
                else {
                    setRC(lrd?.returnCode);
                }
            })
            .catch((error) => {
                console.error("thats error in login element" + error);
            });
    }

    const handleCreateAccount = () => {
        onLoginReturn(1, "-1");
    }

    return (
        <div className="flex w-full h-screen  text-white justify-center content-center">
            <div className="w-1/2 flex flex-col justify-center content-center h-full text-center border-r-2 border-stone-500 p-12">

                <div >
                    <h1> Company manager </h1>

                    <div className="pt-6 text-center">

                        this app is created in simple structure. based on factory design pattern. There is single class called company, and if company is farm created company is companyFarm : company

                    </div>
                </div>

            </div>

            <div className="w-1/2  p-4">

                <div className="flex flex-col justify-center content-center h-full">

                    <div className="flex flex-col p-4 justify-center content-center bg-stone-500/50 border-2 border-stone-400 rounded-3xl">
                        <p className="text-center pb-2 text-2xl">Log in to your company </p>
                        <div className="p-2 justify-center content-center">
                            <input className="text-center w-full rounded-xl p-1 border-2 border-stone-400"
                                type="login"
                                id="lif"
                                value={log}
                                onClick={handleClickLogin}
                                onChange={handleL}
                                maxLength={15}
                            />
                        </div>
                        <div className="p-2">
                            <input className="text-center w-full rounded-xl p-1 border-2 border-stone-400"
                                type="password"
                                id="pif"
                                value={pass}
                                onClick={handleClickPassword}
                                onChange={handleP}
                                maxLength={25}
                            />
                        </div>
                        {rc == 0 && (<div className="text-red-400 place-self-center"> Everything is fine </div>)}
                        {rc == 1 && (<div className="text-red-400 place-self-center"> Wrong password </div>)}
                        {rc == 2 && (<div className="text-red-400 place-self-center"> There is no company with that username </div>)}
                        {rc == 3 && (<div className="text-red-400 place-self-center"> You need to provide login and password first </div>)}
                        <div className="p-2">
                            <button className="text-center w-full bg-stone-500/50 hover:bg-stone-500/75 rounded-xl p-1 border-2 border-stone-400"
                                onClick={handleLogIn}>log In</button>
                        </div>
                        <p className="place-self-center"> If you don't have account you can create new
                            <button className="text-sky-400 hover:text-sky-600 p-0 bg-inherit px-1" onClick={handleCreateAccount}> here.</button>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
