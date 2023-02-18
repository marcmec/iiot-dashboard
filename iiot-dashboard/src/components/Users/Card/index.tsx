import { Avatar, Card } from "antd";
import { IUsers } from "../../../interfaces/User";

interface IUserProps {
    user: IUsers;
}
export const UserCard = ({ user }: IUserProps) => {
    return (
        <Card
            title={user.name}
            hoverable
            style={{ maxWidth: "200px", margin: 4 }}
            extra={[<Avatar />]}
        >
            <span>{user.email}</span>
            <span>{user.unitId}</span>
        </Card>
    );
};

//    "companyId": 1,
//     "email": "testerOne@tractian.com",
//     "id": 1,
//     "name": "John Doe",
//     "unitId": 1
