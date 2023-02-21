import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
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
    const options = {
        title: "Total Collects up Time - All Assets",
        series: [{ type: "column", data: item }],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};
