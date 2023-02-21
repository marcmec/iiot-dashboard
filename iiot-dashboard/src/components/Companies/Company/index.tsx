import { Card, Col, Row, Spin, Statistic } from "antd";
import { useContext, useEffect, useMemo, useState } from "react";
import { API } from "../../../api/axios";

import { ArrowUpOutlined } from "@ant-design/icons";
import CompanyContext from "../../../contexts/Company";
import { IAssets } from "../../../interfaces/Assets";
import { AllAssets } from "../../Assets/ListAssets";
import { ColumnAssetsGraph } from "../../graphs/Columns";
import { WorkOrdersList } from "../../WorkersOrders/CarouselWorkOrders";
interface CompanyProps {}
export const Company = ({}) => {
    const { companyInfo } = useContext(CompanyContext);

    const [assets, setAssets] = useState<IAssets[]>([]);
    const [totalCollects, setTotalCollects] = useState(0);
    const getCompanyInfoLocalStorage = localStorage.getItem("companyInfo");

    const totalAssetsCollects = useMemo(
        () => TotalCollectsAssets(totalCollects),
        [assets]
    );

    const GetAssets = async () => {
        const { data } = await API.get("/assets");
        const assetsCompanyFilter = data.filter(
            (item: IAssets) =>
                item.companyId === companyInfo?.id ||
                item.companyId === JSON.parse(getCompanyInfoLocalStorage!)?.id
        );

        setAssets(assetsCompanyFilter);
        localStorage.setItem("assets", JSON.stringify(data));
    };

    function TotalCollectsAssets(num: number) {
        for (let i = 0; i < assets.length; i++) {
            num += assets[i].metrics.totalCollectsUptime;
        }
        return num;
    }

    useEffect(() => {
        GetAssets();
    }, [companyInfo?.id]);

    return (
        <div style={{ height: "100vh", textAlign: "center", color: "black" }}>
            {/* <Typography.Title>DashBoard</Typography.Title> */}
            <Spin tip="Loading" size="large" spinning={assets.length <= 0}>
                <Row gutter={[8, 16]} wrap>
                    <Col span={24}>
                        <Statistic
                            title="Total Collects"
                            value={totalAssetsCollects}
                            prefix={<ArrowUpOutlined />}
                        />
                    </Col>
                    <Col span={24}>
                        <Row gutter={[8, 16]} wrap>
                            <Col lg={12} xs={24}>
                                <Card
                                    title={
                                        "Total Collects up time - All Assets"
                                    }
                                >
                                    <ColumnAssetsGraph item={assets} />
                                </Card>
                            </Col>
                            <Col lg={12} xs={24}>
                                <Card title={"All Work Orders"}>
                                    <WorkOrdersList />
                                    {/* <WorkOrdersList workOrders={allWorkOrders}/> */}
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col
                        span={24}
                        style={{
                            alignItems: "center",
                            margin: 16,
                            padding: 16,
                        }}
                    >
                        <AllAssets />
                    </Col>
                </Row>
            </Spin>
        </div>
    );
};
