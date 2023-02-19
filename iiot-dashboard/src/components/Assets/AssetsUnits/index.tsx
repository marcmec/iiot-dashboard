import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { IAssets } from "../../../interfaces/Assets";
import { Units } from "../../Companies/Company/Units";

export const AssetsUnits = () => {
    const [assets, setAssets] = useState<IAssets[]>([]);

    const GetAssets = async () => {
        const { data } = await API.get("/assets");
        setAssets(data);
    };
    useEffect(() => {
        GetAssets();
    },[]);
    return (
        <>
            <Units assets={assets} />
        </>
    );
};
