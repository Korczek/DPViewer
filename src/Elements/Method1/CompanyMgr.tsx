import { useState } from "react"
import { LogIn } from "./Components/LoginElement";
import { CreateNewCompany } from "./Components/createNew";
import { CompanyPulpit } from "./Components/companyPulpit";

const rcs: string = "ReturnCode";
const uid: string = "uid";
const sNull: string = "null";

export const CompanyMgr = () => {
    const [userID, setUserID] = useState<string>(() => {
        const cd = sessionStorage.getItem(uid);
        return cd ? cd : sNull;
    });

    const [raportCode, setRaportCode] = useState<number>(() => {
        const rc = sessionStorage.getItem(rcs);
        return rc ? JSON.parse(rc) : -1;
    });

    const handleLoginReturn = (returnCode: number, UserID: string) => {

        console.log("Return code: " + returnCode + " User id " + UserID);

        setRaportCode(returnCode);
        sessionStorage.setItem(rcs, JSON.stringify(returnCode));

        setUserID(UserID);
        sessionStorage.setItem(uid, UserID);
    };


    return (
        <section id="CompanyDemo">
            <>
                {userID == sNull && raportCode == -1 && <LogIn onLoginReturn={handleLoginReturn} />}
                {userID != sNull && raportCode == 0 && <CompanyPulpit ID={userID} />}
                {userID == sNull && raportCode == 1 && <CreateNewCompany />}
            </>
        </section>
    )
}