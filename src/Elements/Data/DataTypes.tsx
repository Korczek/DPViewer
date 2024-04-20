
interface Transportation {
    name:string;
    description:string;
    travelPoints?: TravelPoint[];
    contents?: Content[];
}

interface Company {
    name:string;
    description:string;
    travelPoints?: TravelPoint[];
    contents?: Content[];
}

interface TravelPoint{
    name: string;
    arriveTime: string;
    departureTime: string;
}

interface Content{
    contentID: number;
    contentType: number;
    name: string;
    description: string;
}

interface LoginData {
    Login: string;
    Password: string;
}

interface LoginReturnData {
    returnCode: number;
    UserID: string;
}