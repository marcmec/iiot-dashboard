import { IUnits } from "./Unit";
import { IUsers } from "./User";
import { IWorkOrders } from "./WorkOrders";

export interface ICompany {
    id: number;
    name: string;
    units?: IUnits[];
    users?: IUsers[];
    workOrders?: IWorkOrders[];
}
