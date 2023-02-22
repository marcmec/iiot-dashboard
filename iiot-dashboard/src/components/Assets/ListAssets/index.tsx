import { Card, List } from "antd";
import { useContext, useEffect, useState } from "react";
import { API } from "../../../api/axios";
import CompanyContext from "../../../contexts/Company";
import { IAssets } from "../../../interfaces/Assets";
import { CardAssetEspecification } from "../Card/CardAssetEspecifications";

export const AllAssets = () => {
    const { companyInfo } = useContext(CompanyContext);
    const getCompanyInfoLocalStorage = localStorage.getItem("companyInfo");
    const [allAssets, setAllAssets] = useState<IAssets[]>([]);

    const GetAllAssets = async () => {
        const { data } = await API.get("/assets");
        const assetsCompanyFilter = data.filter(
            (item: IAssets) => item.companyId === companyInfo?.id
        );

        setAllAssets(assetsCompanyFilter);
    };

    useEffect(() => {
        GetAllAssets();
    }, []);
    return (
        <>
            <Card title={"All Assets"}>
                {/* <InputSearch /> */}

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
                    dataSource={allAssets}
                    pagination={{ pageSize: 2 }}
                    renderItem={(item) => (
                        <List.Item>
                            <CardAssetEspecification asset={item} />
                        </List.Item>
                    )}
                />
            </Card>
        </>
    );
};
