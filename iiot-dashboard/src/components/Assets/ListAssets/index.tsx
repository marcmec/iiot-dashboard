import { Card, List } from "antd";
import { IAssets } from "../../../interfaces/Assets";
import { CardAssetEspecification } from "../Card/CardAssetEspecifications";
interface IAllAssets {
    allAssets: IAssets[];
}
export const AllAssets = ({ allAssets }: IAllAssets) => {
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
