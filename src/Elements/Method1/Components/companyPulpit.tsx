


interface CompanyData {
    ID: string;
}


export const CompanyPulpit: React.FC<CompanyData>  = ( {ID} ) => {

    
    console.log("im in pulpit component")

    return(
        <div className="text-center w-screen h-screen text-gray-200 justify-center content-center">
            {ID}
            here is company pulpit.<br/>
            for now there is nothing to display here <br/>
            im working on data management on server now. when everything will be finished i will start setting stuff to display in here 
        </div>
    )
}