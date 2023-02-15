import { useEffect, useState } from "react";
import { API } from "./api/axios";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [assets, setAssets] = useState<any>([{}]);
    const data = [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
    ];

    const config = {
        data,
        height: 400,
        xField: "year",
        yField: "value",
        point: {
            size: 5,
            shape: "diamond",
        },
    };

    const GetAssets = async () => {
        const response = await API.get("/assets");
        console.log(response);
        setAssets(response);
    };
    useEffect(() => {
        GetAssets();
    }, []);

    return (
        <>
            <div style={{ color: "black" }}>oxe fora</div>
            {/* {assets.healthScore.map((e: any) => {
                <div>
                    {e} <div style={{ color: "black" }}>oxe</div>
                </div>;
            })} */}
            {/* <Line {...config} /> */}
        </>
    );
}

export default App;
