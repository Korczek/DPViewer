


async function getLoginPattern(): Promise<LoginData> {
    try {
        const response = await fetch("https://azurecośtamAdres.net/");
        if (!response.ok) {
            throw new Error("Field to feth data");
        }
        const data: LoginData = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}