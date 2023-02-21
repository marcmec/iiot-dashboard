import {
    BarChartOutlined,
    CommentOutlined,
    CustomerServiceOutlined,
    FileOutlined,
    LayoutOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { FloatButton, Layout, Menu, Typography } from "antd";
import { useContext, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import CompanyContext from "../contexts/Company";

const { Header, Content, Footer, Sider } = Layout;

export const LayoutDashBoard = () => {
    const { companyInfo } = useContext(CompanyContext);
    const navItems = [
        {
            key: "/company/1", //colocar route com
            icon: <BarChartOutlined />,
            label: "Dashboard",
        },

        {
            key: "/company/users",
            icon: <TeamOutlined />,
            label: "Users",
        },

        {
            key: "/company/units",
            icon: <LayoutOutlined />,
            label: "Units",
        },

        {
            key: "/company/workorders",
            icon: <FileOutlined />,
            label: "Work Orders",
        },

        {
            key: "/logout",
            icon: <LogoutOutlined />,
            label: "LogOut",
        },
    ];
    const navigate = useNavigate();
    const outlet = useOutlet();
    const localCompanyInfo = JSON.parse(localStorage.getItem("companyInfo")!);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    background: "#9dbda4",
                }}
            >
                <Typography.Title style={{ padding: 8, color: "#fff" }}>
                    {companyInfo?.name || localCompanyInfo?.name}
                </Typography.Title>
            </Header>
            {/* <Layout style={{ backgroundColor: "#ebbbab" }}> */}
            <Layout>
                <Sider
                    collapsible
                    trigger={null}
                    collapsed={collapsed}
                    style={{
                        padding: 4,
                        overflow: "auto",
                        height: "100vh",
                        background: "#9dbda4",
                    }}
                >
                    <Menu
                        mode="inline"
                        style={{
                            background: "#9dbda4",
                            color: "#fff",
                        }}
                        defaultSelectedKeys={["0"]}
                        onClick={({ key }) => {
                            if (key === "/logout") {
                                // <Navigate to={"/"} />;
                                navigate("/");
                            } else {
                                navigate(key);
                            }
                        }}
                        items={navItems}
                    />
                    {collapsed ? (
                        <MenuUnfoldOutlined
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    ) : (
                        <MenuFoldOutlined
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    )}
                </Sider>

                <Content
                    style={{ padding: 16, overflow: "auto", height: "100vh" }}
                >
                    {outlet}
                </Content>
            </Layout>
            <FloatButton.Group
                trigger="click"
                type="primary"
                style={{ right: 24 }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
        </Layout>
    );
};
