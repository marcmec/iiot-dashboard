import { AntDesignOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Badge, Card, Checkbox, Divider, List, Typography } from "antd";
import { IWorkOrders } from "../../../interfaces/WorkOrders";
interface IProps {
    order: IWorkOrders;
    // user: IUsers;
}
export const WorkOrderCard = ({ order }: IProps) => {
    return (
        <>
            <div style={{ margin: 8 }}>
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
                        }}
                        bodyStyle={{
                            padding: 4,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        headStyle={{ fontSize: 12 }}
                        title={order.title}
                        actions={[
                            // <SettingOutlined key="setting" />,
                            <EyeOutlined key="visualizations" />,
                        ]}
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
                                        flexDirection: "column",
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
                                    <p>{item.task}</p>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Badge.Ribbon>
            </div>
        </>
    );
};
