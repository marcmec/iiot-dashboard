import { IUnits } from "./Unit";

export interface ICompany {
    id: number;
    name: string;
    units?: IUnits[];
}
