import { Scatter } from "@ant-design/charts";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Card, Col, Image, Progress, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { IAssets } from "../../../interfaces/Assets";
import { WorkOrdersList } from "../../WorkersOrders";
function converter(data: string) {
    const fullData = new Date(data);
    return fullData.getFullYear().toString + "oxe";
}
export const AssetCard = () => {
    const [scatterData, setScatterData] = useState([]);
    const [asset, setAsset] = useState<IAssets>();
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = async () => {
        const { data } = await API.get("/assets/1");
        setAsset(data);
        console.log(data.healthHistory);
        const newData = data.healthHistory.map((value) => {
            return {
                ...value,
                day: new Date(value.timestamp).getUTCDay(),
                date: new Date(value.timestamp).toLocaleDateString(),
                status: value.status,
            };
        });
        setScatterData(newData);
        console.log(newData);
        console.log(data.healthHistory);
    };
    const scatterConfig = {
        appendPadding: 24,
        data: scatterData,

        xField: "date",
        yField: "day",
        colorField: "status", //aceita #efe1d1
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
                // backgroundColor: "red",
            }}
        >
            <Col span={8}>
                <Card
                    title={asset?.name}
                    bodyStyle={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <Image src={asset?.image} width={300} />
                    Status:{" "}
                    <Typography.Text mark>{asset?.status}</Typography.Text>
                    <Card
                        title={"Specifications"}
                        size={"small"}
                        style={{
                            backgroundColor: "transparent",
                        }}
                    >
                        Model: <Typography.Text>{asset?.model}</Typography.Text>
                        <p>Health Score</p>
                        <Progress percent={asset?.healthscore} steps={10} />
                        <br />
                        <p>MaxTemp</p>
                        <Progress
                            type="circle"
                            percent={asset?.specifications.maxTemp}
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
            <Col span={16}>
                <Row>
                    <Col span={12}>
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
                <Row>
                    <Col span={24}>
                        <WorkOrdersList />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
