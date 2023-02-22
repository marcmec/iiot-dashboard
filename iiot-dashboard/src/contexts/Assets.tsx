import { createContext, useState } from "react";
import { IAssets } from "../interfaces/Assets";

interface IAssetsContextProps {
    assetsInfo: IAssets[] | null;
    setAssetsInfo: Function;
}
const AssetsContext = createContext({} as IAssetsContextProps);

export const AssetsContextProvider = ({ children }: any) => {
    const [assetsInfo, setAssetsInfo] = useState<IAssets[] | null>(null);

    return (
        <AssetsContext.Provider value={{ assetsInfo, setAssetsInfo }}>
            {children}
        </AssetsContext.Provider>
    );
};
export default AssetsContext;
