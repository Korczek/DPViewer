

function getServerAdress(): String {
    return "https://localhost:7219"; // test env
    // return "https://korczlearningapi.azurewebsites.net"; // actual server
}


// async function getLoginPattern(): Promise<LoginData> {
//     try {
//         const response = await fetch(getServerAdress() + "/Transportation/GetEmptyLoginData");
//         console.log(getServerAdress() + "/Transportation/GetEmptyLoginData");
//         if (!response.ok) {
//             throw new Error("Field to feth data");
//         }
//         const data: LoginData = await response.json();
//         return data;
//     }
//     catch (error) {
//         throw error;
//     }
// }

// export const getCompanyData = async (companyType: number): Promise<Company | null> => {
    
//     try{

//         const response = await fetch(getServerAdress() + "/Transportation/GetEmptyTransport");
//         console.log(getServerAdress() + "/Transportation/GetEmptyTransport");
//         if(!response.ok){
//             throw new Error("there is problem with getting empty transport ");
//         }
//         const data: Transportation = await response.json();
//         return data;          
//     }
//     catch (error)
//     {
//         throw ("so, there is error: "+ error);
//     }
// }

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