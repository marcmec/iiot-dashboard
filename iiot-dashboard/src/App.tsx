import { useEffect, useState } from "react";
import { API } from "./api/axios";
import "./App.css";
import { DashBoard } from "./components/Dashboard";
import { LayoutDashBoard } from "./components/Layout";
import { IAssets } from "./interfaces/Assets";

function App() {
    const [count, setCount] = useState(0);
    const [assets, setAssets] = useState<IAssets[]>([]);
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
        const { data } = await API.get("/assets");
        console.log(data);
        setAssets(data);
    };
    useEffect(() => {
        GetAssets();
    }, []);

    return (
        <LayoutDashBoard>
            <DashBoard />
        </LayoutDashBoard>
    );
}

export default App;

// {Array.from(assets).map((e: any) => (
//   <>
//       <div key={e.id}>{e.healthscore}</div>
//       <Image src={e.image} alt="wtf" width={200} />
//       <Line {...config} />
//   </>
// ))}
