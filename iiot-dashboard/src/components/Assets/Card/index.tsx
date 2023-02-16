import { Scatter } from "@ant-design/charts";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Card, Col, Image, Progress, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";

export const AssetCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(
            "https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json"
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };
    const scatterConfig = {
        appendPadding: 24,
        data,
        xField: "xG conceded",
        yField: "Shot conceded",
        colorField: "Result",
        size: 5,
        shape: "circle",
        pointStyle: {
            fillOpacity: 1,
            color: "#efe1d1",
        },
        yAxis: {
            nice: true,
            line: {
                style: {
                    stroke: "#efe1d1",
                },
            },
        },
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: "#eee",
                    },
                },
            },
            line: {
                style: {
                    stroke: "#efe1d1",
                },
            },
        },
        label: {},
    };
    return (
        <Row
            gutter={[16, 16]}
            title={"name asset"}
            style={{
                padding: 16,
            }}
        >
            <Col span={8}>
                <Card
                    title={"nome asset"}
                    bodyStyle={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <Image
                        src="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
                        width={300}
                    />
                    Status: <Typography.Text mark>In Alert</Typography.Text>
                    <Card
                        title={"Specifications"}
                        size={"small"}
                        style={{
                            backgroundColor: "transparent",
                        }}
                    >
                        <p>Health Score</p>
                        <Progress percent={70} steps={10} />
                        <br />
                        <p>MaxTemp</p>
                        <Progress
                            type="circle"
                            percent={80}
                            format={(percent) => `${percent} ˚C`}
                            strokeColor={{
                                "0%": "#108ee9",
                                "50%": "#FAAD14",
                                "100%": "red",
                            }}
                        />
                    </Card>
                </Card>
            </Col>
            <Col span={4}>
                <Card title={"Metrics"} style={{ height: "100%" }}>
                    <Space
                        direction="vertical"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            size="small"
                            title="Last Up time At"
                            extra={<ClockCircleOutlined />}
                            style={{ width: 300 }}
                        >
                            {`${"2023-01-01T16:17:50.180Z"}`}
                        </Card>

                        <Card
                            size="small"
                            title="Total Collects Up Time"
                            extra={<ClockCircleOutlined />}
                            style={{ width: 300 }}
                        >
                            7516
                        </Card>

                        <Card
                            size="small"
                            title="Total Up Time"
                            extra={<ClockCircleOutlined />}
                            style={{ width: 300 }}
                        >{`${1419.620084999977}`}</Card>
                    </Space>
                </Card>
            </Col>

            <Col span={12} style={{ height: "100%" }}>
                <Card title={"Health History"}>
                    <Scatter {...scatterConfig} />
                </Card>
            </Col>
        </Row>
    );
};
