import { LayoutOutlined, TeamOutlined, ToolOutlined } from "@ant-design/icons";
import { Badge, Card, Typography } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../api/axios";
import CompanyContext from "../../../../contexts/Company";
import { IUnits } from "../../../../interfaces/Unit";
("@ant-design/icons");

export const CardCompany = ({ item }: any) => {
    const navigate = useNavigate();
    const { companyInfo, setCompanyInfo } = useContext(CompanyContext);
    const GetCompanyInfo = async () => {
        const { data } = await API.get("/units");

        const filterUnit = data.filter(
            (value: IUnits) => value.companyId === item.id
        );

        setCompanyInfo({ id: item.id, name: item.name, units: filterUnit });
    };

    return (
        <Card
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
                    GetCompanyInfo();
                }
            }}
        >
            <Typography.Title>{item.name}</Typography.Title>
        </Card>
    );
};
