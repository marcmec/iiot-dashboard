import { createContext, useEffect, useState } from "react";
import { ICompany } from "../interfaces/Company";

interface CompanyContext {
    companyInfo: ICompany | null;
    setCompanyInfo: Function;
}
const CompanyContext = createContext({} as CompanyContext);

export const CompanyContextProvider = ({ children }: any) => {
    const [companyInfo, setCompanyInfo] = useState<ICompany | null>(null);
    useEffect(() => {
        companyInfo != null
            ? localStorage.setItem("companyInfo", JSON.stringify(companyInfo))
            : null;
    }, []);

    return (
        <CompanyContext.Provider value={{ companyInfo, setCompanyInfo }}>
            {children}
        </CompanyContext.Provider>
    );
};

export default CompanyContext;
