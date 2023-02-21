import { createContext, useState } from "react";
import { ICompany } from "../interfaces/Company";

interface ICompaniesConextProps {
    companiesInfo: ICompany[] | null;
    setCompaniesInfo: Function;
}
const CompaniesContext = createContext({} as ICompaniesConextProps);

export const CompaniesContextProvider = ({ children }: any) => {
    const [companiesInfo, setCompaniesInfo] = useState<ICompany[] | null>([]);

    return (
        <CompaniesContext.Provider value={{ companiesInfo, setCompaniesInfo }}>
            {children}
        </CompaniesContext.Provider>
    );
};

export default CompaniesContext;
