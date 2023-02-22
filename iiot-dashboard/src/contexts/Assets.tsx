import { createContext, useState } from "react";
import { IAssets } from "../interfaces/Assets";

interface IAssetsContextProps {
    assetsInfo: IAssets[];
    setAssets: Function;
}
const AssetsContext = createContext({} as IAssetsContextProps);

export const AssetsContextProvider = ({ children }: any) => {
    const [assetsInfo, setAssets] = useState<IAssets[]>([]);

    return (
        <AssetsContext.Provider value={{ assetsInfo, setAssets }}>
            {children}
        </AssetsContext.Provider>
    );
};
export default AssetsContext;
