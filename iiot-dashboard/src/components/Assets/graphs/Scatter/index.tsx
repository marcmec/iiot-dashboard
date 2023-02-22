import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const ScatterGraph = ({ data }: any) => {
    const newData = data.map((item: any) => {
        return {
            name: item.status,
            data: [item.date],
        };
    });
    const newData1 = data.map((item: any) => {
        return {
            name: item.status,
            data: item.date,
        };
    });
    const options = {
        title: {
            text: "Health History",
            align: "left",
        },
        xAxis: {
            title: {
                text: "day",
            },
            categories: [
                data.map((date: any) => {
                    return Highcharts.dateFormat("%A", date.date);
                }),
            ],
        },
        yAxis: {
            title: {
                text: "date",
            },
            labels: {
                format: "{value:%Y-%m-%d}",
            },
        },

        series: [...newData],
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
};
