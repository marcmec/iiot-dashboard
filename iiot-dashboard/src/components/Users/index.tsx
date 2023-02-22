import { Table } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../api/axios";
import { IUsers } from "../../interfaces/User";

export const AllUsers = () => {
    const [users, setUsers] = useState<IUsers[]>([]);

    const GetUsers = async () => {
        const { data } = await API.get("/users");
        setUsers(data);
        localStorage.setItem("users", JSON.stringify(data));
    };
    useEffect(() => {
        GetUsers();
    }, []);

    const userColumns = [
        {
            title: "Name",
            dataIndex: "name",
            key: 0,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: 1,
        },
        { title: "Unit", dataIndex: "unitId", key: 2 },
        { title: "Assign Assets", dataInde: "", key: 3 },
        { title: "Assign Work Orders", dataInde: "", key: 3 },
        {
            title: "",
            dataIndex: "",
            key: "",
            render: () => <a>edit</a>,
        },
        {
            title: "",
            dataIndex: "",
            key: "",
            render: () => <a>delete</a>,
        },
    ];
    return (
        <>
            <Table columns={userColumns} dataSource={users} />
        </>
    );
};
