import { createContext, useState } from "react";
import { ICompany } from "../interfaces/Company";

interface CompanyContext {
    companyInfo: ICompany | null;
    setCompanyInfo: Function;
}
const CompanyContext = createContext({} as CompanyContext);

export const CompanyContextProvider = ({ children }: any) => {
    const [companyInfo, setCompanyInfo] = useState<ICompany | null>(null);

    // useEffect(() => {}, [companyInfo]);
    return (
        <CompanyContext.Provider value={{ companyInfo, setCompanyInfo }}>
            {children}
        </CompanyContext.Provider>
    );
};

export default CompanyContext;
