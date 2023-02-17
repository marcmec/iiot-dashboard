import { LayoutOutlined, TeamOutlined, ToolOutlined } from "@ant-design/icons";
import { Badge, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
("@ant-design/icons");

export const CardCompany = ({ item }: any) => {
    const navigate = useNavigate();
    return (
        <Card
            // title={item.name}
            // style={{ backgroundColor: "#ebbbab" }}

            hoverable
            key={item.id}
            actions={
                item.status != "disabled"
                    ? [
                          <Badge>
                              <TeamOutlined key="users" /> 6
                          </Badge>,
                          <Badge>
                              <LayoutOutlined key="units" /> 2
                          </Badge>,
                          <Badge>
                              <ToolOutlined key="assets" /> 6
                          </Badge>,
                      ]
                    : [<p>disabled</p>]
            }
            onClick={() => {
                if (item.status != "disabled") {
                    navigate(`${"/company/" + item.id}`);
                }
            }}
        >
            <Typography.Title>{item.name}</Typography.Title>
        </Card>
    );
};
