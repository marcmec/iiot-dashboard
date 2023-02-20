import { Spin } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { IUsers } from "../../../interfaces/User";
import { UserCard } from "../Card";
interface IAssignsUsers {
    assignsUsers?: Number[];
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
        <>
            <Spin tip="Loading" size="large" spinning={users.length <= 0}>
                {!assignsUsers ? (
                    <>
                        {" "}
                        {users.map((user) => (
                            <UserCard user={user} key={user.id} />
                        ))}{" "}
                    </>
                ) : (
                    <div
                        style={{
                            color: "#ebbbab",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: " center",
                        }}
                    >
                        {assignsUsers?.map((id) => (
                            <>
                                {users.map((user) => (
                                    <>
                                        {id === user.id ? (
                                            <UserCard
                                                user={user}
                                                key={user.id}
                                            />
                                        ) : null}
                                    </>
                                ))}
                            </>
                        ))}
                    </div>
                )}
            </Spin>
        </>
    );
};
