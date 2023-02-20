import { Card, Col, List, Row } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../../api/axios";
import { IAssets } from "../../../../interfaces/Assets";
import { CardAssetEspecification } from "../../../Assets/Card/CardAssetEspecifications";

interface IUnitAssetsProps {
    assets?: IAssets[];
}

export const Units = ({ assets }: IUnitAssetsProps) => {
    const [units, setUnits] = useState<{ id: number; name: string }[]>([]);
    const GetUnits = async () => {
        const { data } = await API.get("/units");

        setUnits(data);
    };
    useEffect(() => {
        GetUnits();
    }, []);

    const assetsFilter = (data: IAssets[], k: number) =>
        data.filter((item) => item.unitId === k);

    return (
        <>
            <Row gutter={[8, 16]}>
                <Col lg={24} sm={24}>
                    <List
                        dataSource={units}
                        pagination={{
                            pageSize: 1,
                            position: "bottom",
                            align: "center",
                        }}
                        renderItem={(item, i) => (
                            <Card title={item.name} key={item.name.toString()}>
                                <List
                                    grid={{
                                        gutter: 2,
                                        xs: 1,
                                        sm: 2,
                                        md: 4,
                                        lg: 4,
                                        xl: 6,
                                        xxl: 2,
                                    }}
                                    pagination={{ pageSize: 2 }}
                                    dataSource={assetsFilter(assets, item.id)}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <CardAssetEspecification
                                                asset={item}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        )}
                    />
                </Col>
            </Row>
        </>
    );
};
