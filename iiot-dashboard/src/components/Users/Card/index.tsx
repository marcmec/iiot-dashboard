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
        </Card>
    );
};
