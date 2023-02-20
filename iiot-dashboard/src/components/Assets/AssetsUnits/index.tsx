import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { IAssets } from "../../../interfaces/Assets";
import { Units } from "../../Companies/Company/Units";
import { WorkOrdersUnits } from "../../WorkersOrders/Table";

export const AssetsUnits = () => {
    const [assets, setAssets] = useState<IAssets[]>([]);

    const GetAssets = async () => {
        const { data } = await API.get("/assets");
        setAssets(data);
    };
    useEffect(() => {
        GetAssets();
    }, []);
    return (
        <>
            <Spin size={"large"} spinning={assets.length <= 0}>
                <Units assets={assets} />
                <Card title={"Work Orders"}>
                    <WorkOrdersUnits />
                </Card>
            </Spin>
        </>
    );
};
