

function getServerAdress(): String {
    // return "https://localhost:7219"; // test env
    return "https://korczlearningapi.azurewebsites.net"; // actual server
}


export const verifyLogin = async (loginData: LoginData): Promise<LoginReturnData | null> => {
    try{
        const resp = await fetch(getServerAdress() +  "/Companies/VerifyLogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if(!resp.ok){
            throw new Error(" return not ok ");
        }

        const data: LoginReturnData = await resp.json();
        return data;
    }
    catch (error) 
    {
        throw new Error("There is an error " + error);
    }
}