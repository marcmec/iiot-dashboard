import { Card, Carousel, Col, Row, Spin, Statistic, Typography } from "antd";
import { useEffect, useMemo, useState } from "react";
import { API } from "../../../api/axios";
import { CardAssetEspecification } from "../../Assets/Card/CardAssetEspecifications";

import { LikeOutlined } from "@ant-design/icons";
import { IAssets } from "../../../interfaces/Assets";
import { ColumnAssetsGraph } from "../../graphs/Columns";
import { WorkOrdersList } from "../../WorkersOrders/CarouselWorkOrders";
interface CompanyProps {}
export const Company = ({}) => {
    const [assets, setAssets] = useState<IAssets[]>([]);
    const [totalCollects, setTotalCollects] = useState(0);

    const paletteSemanticRed = "#F4664A";
    const brandColor = "#5B8FF9";

    const totalAssetsCollects = useMemo(
        () => TotalCollectsAssets(totalCollects),
        [assets]
    );

    const getAssets = async () => {
        const { data } = await API.get("/assets");

        setAssets(data);
    };

    function TotalCollectsAssets(num: any) {
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
            <Typography.Title>DashBoard</Typography.Title>
            <Spin tip="Loading" size="large" spinning={assets.length <= 0}>
                <Row gutter={[8, 16]} wrap>
                    <Col lg={12} sm={24}>
                        <Row gutter={[8, 16]} wrap>
                            <Col span={24}>
                                <Statistic
                                    title="Total Collects"
                                    value={totalAssetsCollects}
                                    prefix={<LikeOutlined />}
                                />
                            </Col>

                            <Col span={24}>
                                <Card
                                    title={
                                        "Total Collects up time - All Assets"
                                    }
                                >
                                    <ColumnAssetsGraph item={assets} />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} sm={24}>
                        <Col span={24}>
                            <Statistic
                                title="Work Orders"
                                value={17}
                                prefix={<LikeOutlined />}
                            />
                        </Col>
                        <Col span={24}>
                            <WorkOrdersList />
                        </Col>
                    </Col>
                    <Row gutter={[8, 16]} wrap>
                        <Col
                            lg={6}
                            sm={24}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <Card
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                }}
                            >
                                <Typography.Title>
                                    All Assets <br />
                                    {assets.length.toString()}
                                </Typography.Title>
                            </Card>
                        </Col>
                        <Col lg={18} sm={24}>
                            <Carousel
                                slidesToShow={2}
                                draggable
                                dotPosition="top"
                            >
                                {assets.map((item) => (
                                    <CardAssetEspecification asset={item} />
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Row>
            </Spin>
        </div>
    );
};
