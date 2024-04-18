import { useState } from "react"
import { LogIn } from "./Components/LoginElement";
import { CreateNewCompany } from "./Components/createNew";

const rcs: string = "ReturnCode";
const cds: string = "companyData";
// raports -1 null | 0 - logged in | 1 - create new company

export const CompanyMgr = () => {
    const [data, setData] = useState<Company | null>(() => {
        const cd = sessionStorage.getItem(cds);
        return cd ? JSON.parse(cd) : null;
    });

    const [raportCode, setRaportCode] = useState<number>(() => {
        const rc = sessionStorage.getItem(rcs);
        return rc ? JSON.parse(rc) : -1;
    });

    const handleLoginReturn = (data: Company | null, returnCode: number) => {
        console.log("Data is " + data + " and return code is : " + returnCode);
        setData(data);
        sessionStorage.setItem(cds, JSON.stringify(data));
        setRaportCode(returnCode);
        sessionStorage.setItem(rcs, JSON.stringify(returnCode));
    };


    return (
        <>
            {!data && raportCode == -1 && <LogIn onLoginReturn={handleLoginReturn} />}
            {data && raportCode == 0 && <CreateNewCompany />}
            {!data && raportCode == 1 && <CreateNewCompany />}
        </>
    )
}