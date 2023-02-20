import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../../api/axios";
import { IAssets } from "../../../../interfaces/Assets";
import { IUnits } from "../../../../interfaces/Company";
import { CardAssetEspecification } from "../../../Assets/Card/CardAssetEspecifications";

interface IUnitsProps {
    assets?: IAssets[];
}
export const Units = ({ assets }: IUnitsProps) => {
    const [units, setUnits] = useState([]);

    const GetUnits = async () => {
        const { data } = await API.get("/units");

        setUnits(data);
    };
    useEffect(() => {
        GetUnits();
    }, []);
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <>
            <Row gutter={[8, 16]}>
                {units.map((u: IUnits, i) => (
                    <Col lg={12} sm={24}>
                        <Card title={u.name} key={i} style={{ margin: 4 }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    overflow: "auto",
                                }}
                                draggable={true}
                            >
                                {assets?.map((item) => (
                                    <>
                                        {item.unitId === u.id ? (
                                            <CardAssetEspecification
                                                asset={item}
                                            />
                                        ) : null}
                                    </>
                                ))}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};
