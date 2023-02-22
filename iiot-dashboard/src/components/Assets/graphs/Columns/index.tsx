import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { IAssets } from "../../../../interfaces/Assets";

interface IColumnAssetsGraphProps {
    item: IAssets[];
}
export const ColumnAssetsGraph = ({ item }: IColumnAssetsGraphProps) => {
    const metrics = item.map((value: any) => {
        return {
            name: value.name,
            data: [value.metrics.totalCollectsUptime],
        };
    });

    const options = {
        title: "Total Collects up Time - All Assets",
        chart: {
            type: "column",
        },
        yAxis: {
            title: {
                text: "collects",
            },
        },
        series: [...metrics],
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />{" "}
        </>
    );
};
