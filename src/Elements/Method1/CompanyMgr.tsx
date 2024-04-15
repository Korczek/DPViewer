import { useEffect, useState } from "react"
import { LogIn } from "./Components/LoginElement";

export const CompanyMgr = () => {
    const [data, setData] = useState<Transportation | null>( () => {
        const d = localStorage.getItem("transportationData");
        return d ? JSON.parse(d) : null;
    });
    
    return (
        <>
            {data == null ? (
                <LogIn companyData={setData} />
            ) : (null)}
        </>
    )
}

function GetTransport() {

    const [data, setData] = useState<Transportation | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7219/Transportation/GetDemoTransport');//('https://korczlearningapi.azurewebsites.net/Transportation/GetDemoTransport')('https://localhost:7219/Transportation/GetDemoTransport');
                const responseData = await response.json();
                setData(responseData);
            }
            catch (error) {
                console.error('fetching data propblem:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <div className="flex flex-full justify-center content-center">
            {data ? (
                <div>

                    <div className="w-1/4 bg-amber-600 rounded-3xl p-4">
                        <div> Name:<br /> {data.name}</div>
                        <div> Description: {data.description}</div>
                    </div>

                    <div className="w-3/4 bg-amber-600 rounded-3xl p4">
                        {data.travelPoints != null && (
                            <ul>
                                {data.travelPoints.map((travelPoint, index) => (
                                    <li key={index}>
                                        <div>name: {travelPoint.name}</div>
                                        <div>Arrive: {travelPoint.arriveTime}</div>
                                        <div>Departure: {travelPoint.departureTime}</div>
                                        <br />
                                    </li>
                                ))}
                            </ul>
                        )}
                        <br />
                        <br />
                        {data.contents != null && (
                            <ul>
                                {data.contents.map((content, index) => (
                                    <li key={index}>
                                        <div>content ID: {content.contentID}</div>
                                        <div>Content Type: {content.contentType}</div>
                                        <div>Content Name: {content.name}</div>
                                        <div>Content Description: {content.description}</div>
                                        <br />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ) : (<div>there is nothing to display </div>)}

        </div>
    )
}