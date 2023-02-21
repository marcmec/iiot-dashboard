import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Units } from "..";
import { IAssets } from "../../../../../interfaces/Assets";

export const AssetsUnits = () => {
    const [assets, setAssets] = useState<IAssets[]>([]);
    const getAssetsFromLocalStorage = localStorage.getItem("assets");

    useEffect(() => {
        setAssets(JSON.parse(getAssetsFromLocalStorage!));
    }, []);
    return (
        <>
            <Spin size={"large"} spinning={!assets}>
                <Units assets={assets} />
                {/* <Card title={"Work Orders"}>
                    <AllworkOrders />
                </Card> */}
            </Spin>
        </>
    );
};
