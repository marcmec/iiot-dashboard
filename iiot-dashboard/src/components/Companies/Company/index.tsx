import { Card, Col, List, Row, Spin, Statistic } from "antd";
import { useEffect, useMemo, useState } from "react";
import { API } from "../../../api/axios";
import { CardAssetEspecification } from "../../Assets/Card/CardAssetEspecifications";

import { ArrowUpOutlined } from "@ant-design/icons";
import { IAssets } from "../../../interfaces/Assets";
import { ColumnAssetsGraph } from "../../graphs/Columns";
import { WorkOrdersList } from "../../WorkersOrders/CarouselWorkOrders";
interface CompanyProps {}
export const Company = ({}) => {
    const [assets, setAssets] = useState<IAssets[]>([]);
    const [totalCollects, setTotalCollects] = useState(0);

    const totalAssetsCollects = useMemo(
        () => TotalCollectsAssets(totalCollects),
        [assets]
    );

    const getAssets = async () => {
        const { data } = await API.get("/assets");

        setAssets(data);
    };

    function TotalCollectsAssets(num: number) {
        for (let i = 0; i < assets.length; i++) {
            num += assets[i].metrics.totalCollectsUptime;
        }
        return num;
    }

    useEffect(() => {
        getAssets();
    }, []);

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
                        <List
                            grid={{
                                gutter: 2,
                                column: 2,
                            }}
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 2,
                                position: "top",
                            }}
                            dataSource={assets}
                            renderItem={(item) => (
                                <CardAssetEspecification asset={item} />
                            )}
                        />
                    </Col>
                </Row>
            </Spin>
        </div>
    );
};
