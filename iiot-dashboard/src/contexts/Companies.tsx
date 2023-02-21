import { createContext, useEffect, useState } from "react";
import { ICompany } from "../interfaces/Company";

interface ICompaniesConextProps {
    companiesInfo: ICompany[] | null;
    setCompaniesInfo: Function;
}
const CompaniesContext = createContext({} as ICompaniesConextProps);

export const CompaniesContextProvider = ({ children }: any) => {
    const [companiesInfo, setCompaniesInfo] = useState<ICompany[] | null>([]);

    useEffect(() => {
        localStorage.setItem("companies", JSON.stringify(companiesInfo));
    }, []);
    return (
        <CompaniesContext.Provider value={{ companiesInfo, setCompaniesInfo }}>
            {children}
        </CompaniesContext.Provider>
    );
};

export default CompaniesContext;
