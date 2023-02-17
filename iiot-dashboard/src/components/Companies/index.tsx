import { List } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api/axios";
import { CardCompany } from "./Company/Card";

export const Companies = () => {
    const [companies, setCompanies] = useState<any>([]);
    const navigate = useNavigate();
    const getCompanies = async () => {
        const { data } = await API.get("/companies");

        setCompanies([
            ...data,
            { id: 2, name: "Another Company", status: "disabled" },
        ]);
    };

    useEffect(() => {
        getCompanies();
    }, []);
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#9dbda4",
            }}
        >
            <h1 style={{ color: "white" }}>Choose Company</h1>
            <List
                dataSource={companies}
                renderItem={(item) => (
                    <List.Item>
                        <CardCompany item={item} />
                    </List.Item>
                )}
            />
        </div>
    );
};
