import {
    DesktopOutlined,
    FileOutlined,
    LaptopOutlined,
    NotificationOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, MenuProps, theme } from "antd";
import React, { useState } from "react";
import { WorkOrdersList } from "./WorkersOrders";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "3"),
        getItem("Bill", "4"),
        getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
];

export const LayoutDashBoard = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
        key,
        label: `nav ${key}`,
    }));
    const items2: MenuProps["items"] = [
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
    ].map((icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });

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
                    backgroundColor: "white",
                }}
            >
                <Breadcrumb>
                    <Breadcrumb.Item>Company Id</Breadcrumb.Item>
                    <Breadcrumb.Item>Unit id</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Layout>
                <Sider
                    style={{
                        padding: 4,
                        overflow: "auto",
                        height: "100vh",
                    }}
                >
                    left sidebar
                </Sider>
                <Content
                    style={{ padding: 4, overflow: "auto", height: "100vh" }}
                >
                    {children}
                </Content>
                <Sider
                    style={{
                        padding: 4,
                        overflow: "auto",
                        height: "100vh",
                    }}
                >
                    <WorkOrdersList />
                </Sider>
            </Layout>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
