import React, { useEffect, useState } from "react"
import InputField from "../../DefaultElements/InputField";

interface LoginData {
    companyData: React.Dispatch<React.SetStateAction<Transportation | null>>;
}

export const LogIn: React.FC<LoginData> = () => {

    const [loginData, setLoginData] = useState<LoginData | null>(null);

    useEffect(() => {
        getLoginPattern()
            .then(ld => {
                setLoginData(ld);
            })
            .catch(error => {
                console.error("error", error);
            });
    });

    const [login, setLogin] = useState<string>('login');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 15) {
            setLogin(event.target.value);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7219/Transportation/GetDemoTransport');
                //('https://korczlearningapi.azurewebsites.net/Transportation/GetDemoTransport')('https://localhost:7219/Transportation/GetDemoTransport');
                const responseData = await response.json();
                setLoginData(responseData);
            }
            catch (error) {
                console.error('fetching data propblem:', error);
            }
        };
        fetchData();
    }, []);



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

                        <input className="text-center rounded-full"
                            type="text"
                            id="inputField"
                            value={login}
                            onChange={handleChange}
                            maxLength={15}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

function fetchCompany 
