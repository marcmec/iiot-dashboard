import { AntDesignOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Badge, Card, Checkbox, Divider, List, Typography } from "antd";
import { IWorkOrders } from "../../../interfaces/WorkOrders";
interface IProps {
    order: IWorkOrders;
    // user: IUsers;
}
export const WorkOrderCard = ({ order }: IProps) => {
    return (
        <Card
            title={"Work Order"}
            style={{ margin: 8, backgroundColor: "#9dbda4", color: "#fbf8e9" }}
            headStyle={{ color: "#fbf8e9" }}
            extra={[
                // <SettingOutlined key="setting" />,
                <a>
                    <EyeOutlined key="visualizations" />
                </a>,
            ]}
        >
            <Badge.Ribbon
                text={`${order.priority}`}
                color={order.priority === "high" ? " red" : "green"}
            >
                <Divider type="vertical" />
                <Card
                    size={"small"}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        textAlign: "left",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    bodyStyle={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        // alignItems: "flex-start",
                    }}
                    // headStyle={{ fontSize: 12 }}
                    title={order.title}
                >
                    <Avatar.Group maxCount={2}>
                        {order.assignedUserIds.map((users) => (
                            <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                style={{ backgroundColor: "#1890ff" }}
                                icon={<AntDesignOutlined />}
                            >
                                {users}
                            </Avatar>
                        ))}
                    </Avatar.Group>
                    <Typography.Paragraph>
                        {order.description}
                    </Typography.Paragraph>
                    Status:
                    <Typography.Text mark> {order.status}</Typography.Text>
                    <List
                        style={{
                            padding: 0,
                        }}
                        dataSource={order.checklist}
                        renderItem={(item) => (
                            <List.Item
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Checkbox
                                    checked={item.completed ? true : false}
                                    disabled
                                >
                                    {item.completed
                                        ? "Completed"
                                        : "Not Completed"}
                                </Checkbox>
                                <span>{item.task}</span>
                            </List.Item>
                        )}
                    />
                </Card>
            </Badge.Ribbon>
        </Card>
    );
};
