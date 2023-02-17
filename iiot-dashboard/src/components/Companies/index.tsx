import { Card, List } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api/axios";

export const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    const getCompanies = async () => {
        const { data } = await API.get("/companies");

        setCompanies([...data, { id: 2, name: "Another Company" }]);
    };

    useEffect(() => {
        getCompanies();
    }, []);
    return (
        <Card title={"Choose Company"}>
            <List
                dataSource={companies}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            title={item.name}
                            key={item.id}
                            onClick={() => {
                                navigate(`${"/empresa/" + item.id}`);
                            }}
                        ></Card>
                    </List.Item>
                )}
            />
        </Card>
    );
};
