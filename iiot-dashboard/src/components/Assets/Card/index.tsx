import { ClockCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row, Skeleton, Space } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../api/axios";
import { days } from "../../../constants";
import { IAssets } from "../../../interfaces/Assets";
import { ScatterGraph } from "../../graphs/Scatter";
import { WorkOrdersList } from "../../WorkersOrders";
import { CardAssetEspecification } from "./CardAssetEspecifications";

export const AssetCard = () => {
    const [scatterData, setScatterData] = useState([]);
    const [asset, setAsset] = useState<IAssets>();
    const { id } = useParams();
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = async () => {
        const { data } = await API.get(`${"/assets/" + id}`);
        setAsset(data);
        console.log(data.healthHistory);
        const newData = data.healthHistory.map((value: any) => {
            return {
                ...value,
                day: days[new Date(value.timestamp).getDay()],
                date: new Date(value.timestamp).toLocaleDateString(),
                status: value.status,
            };
        });
        setScatterData(newData);
        console.log(newData);
        console.log(data.healthHistory);
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
            <Skeleton loading={!scatterData} active avatar>
                <Col span={8}>
                    <CardAssetEspecification asset={asset} />
                </Col>
                <Col span={16}>
                    <Row>
                        <Col span={10}>
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

                        <Col span={14} style={{ height: "100%" }}>
                            <Card title={"Health History"}>
                                <ScatterGraph data={scatterData} />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <WorkOrdersList />
                        </Col>
                    </Row>
                </Col>
            </Skeleton>
        </Row>
    );
};
