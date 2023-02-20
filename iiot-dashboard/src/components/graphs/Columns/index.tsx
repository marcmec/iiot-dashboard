import { Column } from "@ant-design/charts";
import { IAssets } from "../../../interfaces/Assets";

interface IColumnAssetsGraphProps {
    item: IAssets[];
}
export const ColumnAssetsGraph = ({ item }: IColumnAssetsGraphProps) => {
    const config = {
        data: item.map((value: any) => {
            return {
                ...value.metrics,
                name: value.name,
            };
        }),
        xField: "totalCollectsUptime",
        yField: "totalUptime",
        seriesField: "name",
        smooth: true,
    };

    return <Column {...config} />;
};
