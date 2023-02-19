import { Column } from "@ant-design/charts";
import { Card, Carousel, Col, Row, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { CardAssetEspecification } from "../../Assets/Card/CardAssetEspecifications";
import { WorkOrdersList } from "../../WorkersOrders/CarouselWorkOrders";

import { LikeOutlined } from "@ant-design/icons";
interface CompanyProps {}
export const Company = ({}) => {
    const [assets, setAssets] = useState([]);
    const data = [
        {
            type: "1-3秒",
            value: 0.16,
        },
        {
            type: "4-10秒",
            value: 0.125,
        },
        {
            type: "11-30秒",
            value: 0.24,
        },
        {
            type: "31-60秒",
            value: 0.19,
        },
        {
            type: "1-3分",
            value: 0.22,
        },
        {
            type: "3-10分",
            value: 0.05,
        },
        {
            type: "10-30分",
            value: 0.01,
        },
        {
            type: "30+分",
            value: 0.015,
        },
    ];
    const paletteSemanticRed = "#F4664A";
    const brandColor = "#5B8FF9";
    const config = {
        data,
        xField: "type",
        yField: "value",
        seriesField: "",
        color: ({ type }: any) => {
            if (type === "10-30分" || type === "30+分") {
                return paletteSemanticRed;
            }

            return brandColor;
        },
        label: {
            content: (originData: any) => {
                const val = parseFloat(originData.value);

                if (val < 0.05) {
                    return (val * 100).toFixed(1) + "%";
                }
            },
            offset: 10,
        },
        legend: false,
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    const getAssets = async () => {
        const { data } = await API.get("/assets");
        setAssets(data);
    };
    useEffect(() => {
        getAssets();
    }, []);

    return (
        <div style={{ height: "100vh", textAlign: "center", color: "black" }}>
            <Typography.Title>DashBoard</Typography.Title>

            <Row gutter={[8, 16]} wrap>
                <Col lg={12} sm={24}>
                    <Row gutter={[8, 16]} wrap>
                        <Col span={24}>
                            <Statistic
                                title="Coletas Totais"
                                value={5182918}
                                prefix={<LikeOutlined />}
                            />
                        </Col>

                        <Col span={24}>
                            <Card title={"Total Collects up time - All Assets"}>
                                <Column {...config} />
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
                        <Card>
                            <Typography.Title>All Assets</Typography.Title>
                        </Card>
                    </Col>
                    <Col lg={18} sm={24}>
                        <Carousel
                            slidesToShow={2}
                            // centerMode
                            // infinite={true}

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
        </div>
    );
};
