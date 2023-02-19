import { Column } from "@ant-design/charts";
import { Badge, Card, Carousel, Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { CardAssetEspecification } from "../../Assets/Card/CardAssetEspecifications";
import { Users } from "../../Users";
import { WorkOrdersList } from "../../WorkersOrders";
import { Units } from "./Units";

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
        color: ({ type }) => {
            if (type === "10-30分" || type === "30+分") {
                return paletteSemanticRed;
            }

            return brandColor;
        },
        label: {
            content: (originData) => {
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
                            <Card
                                title={"Coletas totais"}
                                bordered
                                extra={[<Badge> 6 assets </Badge>]}
                                // style={{ backgroundColor: "#ebbbab" }}
                                bodyStyle={{ backgroundColor: "#9dbda4" }}
                            >
                                50000
                            </Card>
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
                        <Card
                            title={"Work Orders"}
                            bordered
                            // style={{ backgroundColor: "#ebbbab" }}
                            bodyStyle={{ backgroundColor: "#9dbda4" }}
                        >
                            15
                        </Card>
                    </Col>
                    <Col span={24}>
                        <WorkOrdersList />
                    </Col>
                </Col>
                <Row gutter={[8, 16]} wrap>
                    <Col lg={12} sm={24}>
                        <Typography.Title>All Assets</Typography.Title>
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
                    <Col lg={12} sm={24}>
                        <Col span={24}>
                            <Typography.Title>All Units</Typography.Title>

                            <Units />
                        </Col>
                        <Col span={24}>
                            <Users />
                        </Col>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};
