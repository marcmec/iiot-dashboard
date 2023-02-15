import {
    DesktopOutlined,
    FileOutlined,
    LaptopOutlined,
    NotificationOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, MenuProps, theme } from "antd";
import React, { useState } from "react";
import { WorkersOrderList } from "./WorkersOrders";

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
        <Layout style={{ width: "100vw", height: "100vh" }}>
            <Header>header</Header>
            <Layout>
                <Sider style={{ padding: 4 }}>left sidebar</Sider>
                <Content style={{ padding: 4 }}>{children}</Content>
                <Sider style={{ padding: 4 }}>
                    <WorkersOrderList />
                </Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
};
