import { IAssets } from "./Assets";
import { IUsers } from "./User";

export interface IUnits {
    companyId: number;
    id: number;
    name: string;
    users?: IUsers[];
    assets?: IAssets[];
}
