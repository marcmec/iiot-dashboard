import { Card, Col, List, Row } from "antd";
import { useContext, useState } from "react";
import CompanyContext from "../../../../contexts/Company";
import { IAssets } from "../../../../interfaces/Assets";
import { IUnits } from "../../../../interfaces/Unit";
import { CardAssetEspecification } from "../../../Assets/Card/CardAssetEspecifications";

interface IUnitAssetsProps {
    assets?: IAssets[];
}

export const Units = ({ assets }: IUnitAssetsProps) => {
    const { companyInfo } = useContext(CompanyContext);
    const [units, setUnits] = useState<IUnits[]>(companyInfo?.units!);

    const assetsFilter = (data: IAssets[], k: number) =>
        data.filter((item) => item.unitId === k);

    return (
        <>
            <Row gutter={[8, 16]}>
                <Col span={24}>
                    <List
                        dataSource={units}
                        pagination={{
                            pageSize: 1,
                            position: "top",
                            align: "center",
                        }}
                        renderItem={(item, i) => (
                            <Card
                                title={item.name}
                                key={item.name.toString()}
                                extra={[
                                    <a
                                        onClick={() =>
                                            alert(JSON.stringify(units[i]))
                                        }
                                    >
                                        Edit
                                    </a>,
                                ]}
                            >
                                <List
                                    grid={{
                                        gutter: 16,
                                        xs: 1,
                                        sm: 2,
                                        md: 2,
                                        lg: 2,
                                        xl: 2,
                                        xxl: 2,
                                    }}
                                    pagination={{ pageSize: 2 }}
                                    dataSource={assetsFilter(assets!, item.id)}
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
