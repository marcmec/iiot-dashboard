import { useEffect, useState } from "react";
import { API } from "../../api/axios";
import { IUsers } from "../../interfaces/User";
import { UserCard } from "./Card";
interface IAssignsUsers {
    assignsUsers: Number[];
}
export const Users = ({ assignsUsers }: IAssignsUsers) => {
    const [users, setUsers] = useState<IUsers[]>([]);
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
                <>
                    {assignsUsers.map((id) => (
                        <>{id === user.id ? <UserCard user={user} /> : null}</>
                    ))}
                </>
            ))}
        </div>
    );
};
