import { Scatter } from "@ant-design/charts";

export const ScatterGraph = ({ data }: any) => {
    const scatterConfig = {
        appendPadding: 32,
        data: data,

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
        label: {
            style: {
                display: "none",
            },
        },
    };
    return <Scatter {...scatterConfig} />;
};
