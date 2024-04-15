import React, { useState } from "react"
import InputField from "../../DefaultElements/InputField";

interface LoginData {
    companyData: React.Dispatch<React.SetStateAction<Transportation | null>>;
}

export const LogIn: React.FC<LoginData> = () => {

    const [loginData, setLoginData] = useState<LoginData | null>(null);

    return (
        <div className="flex w-full h-screen  text-white justify-center content-center">
            <div className="w-1/2 justify-center text-center border-r-2 border-gray-500 p-12">

                <h1> Company manager </h1>

                <div className="pt-6 text-center">

                    this app is created in simple structure. based on factory design pattern. There is single class called company, and if company is farm created company is companyFarm : company

                </div>


            </div>

            <div className="w-1/2  p-4 border-l-2 border-gray-500">

                // get login file template from server <br />
                // display login in divs<br />
                // get data from user<br />
                // send this data to server when user will press login button
                <div className="flex flex-col justify-center">
                    <div className="">
                        <h1 className="text-center font-xl"> Log in to your company </h1>
                    </div>

                    <div>
                        <InputField />
                    </div>

                </div>



            </div>
        </div>
    )
}
