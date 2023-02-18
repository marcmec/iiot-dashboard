import { Card } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../../api/axios";
import { IUnits } from "../../../../interfaces/Company";

export const Units = () => {
    const [units, setUnits] = useState([]);

    const GetUnits = async () => {
        const { data } = await API.get("/units");

        setUnits(data);
    };
    useEffect(() => {
        GetUnits();
    }, []);
    return (
        <>
            <div style={{ color: "black" }}>
                {units.map((u: IUnits) => (
                    <Card title={u.name}></Card>
                ))}
            </div>
        </>
    );
};
