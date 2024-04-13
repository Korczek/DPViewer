import { useEffect, useState } from "react"


export const Method1 = () => {
    return (
        <div className="text-white">

            some content

            here will be content when i place api on azure. for now there is nothing to display 

            {/* {GetTransport()} */}
        </div>
    )
}

function GetTransport() {

    const [data, setData] = useState<Transportation | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7219/Transportation/GetDemoTransport');
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
        <div>
            {data && (
                <div>
                    <div> Name: {data.name}</div>
                    <div> Description: {data.description}</div>
                    <br/>
                    <br/>
                    {data.travelPoints != null && (
                        <ul>
                            {data.travelPoints.map((travelPoint, index) => (
                                <li key={index}>
                                    <div>name: {travelPoint.name}</div>
                                    <div>Arrive: {travelPoint.arriveTime}</div>
                                    <div>Departure: {travelPoint.departureTime}</div>
                                    <br/>
                                </li>
                            ))}
                        </ul>
                    )}
                    <br/>
                    <br/>
                    {data.contents != null && (
                        <ul>
                            {data.contents.map((content, index) => (
                                <li key={index}>
                                    <div>content ID: {content.contentID}</div>
                                    <div>Content Type: {content.contentType}</div>
                                    <div>Content Name: {content.name}</div>
                                    <div>Content Description: {content.description}</div>
                                    <br/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

        </div>
    )
}