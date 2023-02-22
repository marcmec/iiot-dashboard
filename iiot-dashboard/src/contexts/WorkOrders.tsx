import { createContext, useState } from "react";
import { IWorkOrders } from "../interfaces/WorkOrders";

interface IWorkOrderContextProps {
    workOrdersInfo: IWorkOrders[] | null;
    setWorkOrdersInfo: Function;
}
const WorkOrdersContext = createContext({} as IWorkOrderContextProps);

export const WorkOrdersContextProvider = ({ children }: any) => {
    const [workOrdersInfo, setWorkOrdersInfo] = useState<IWorkOrders[] | null>(
        null
    );

    return (
        <WorkOrdersContext.Provider
            value={{ workOrdersInfo, setWorkOrdersInfo }}
        >
            {children}
        </WorkOrdersContext.Provider>
    );
};

export default WorkOrdersContext;
