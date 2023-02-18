import { useEffect, useState } from "react";
import { API } from "../../api/axios";
import { UserCard } from "./Card";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const GetUsers = async () => {
        const { data } = await API.get("/users");
        setUsers(data);
    };
    useEffect(() => {
        GetUsers();
    }, []);
    return (
        <div
            style={{
                color: "#ebbbab",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: " center",
            }}
        >
            {users.map((user) => (
                <UserCard user={user} />
            ))}
        </div>
    );
};
