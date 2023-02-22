import {
    BarChartOutlined,
    FileOutlined,
    LayoutOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PlusCircleOutlined,
    TeamOutlined,
    ToolOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import { FloatButton, Layout, Menu, Typography } from "antd";
import { useContext, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import CompanyContext from "../contexts/Company";
import { ModalAsset } from "./Modals/Asset";
import { ModalUser } from "./Modals/User";

const { Header, Content, Footer, Sider } = Layout;

export const LayoutDashBoard = () => {
    const { companyInfo } = useContext(CompanyContext);
    const [openModal, setOpenModal] = useState({
        user: false,
        unit: false,
        asset: false,
    });

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
    function SetModalOpen(modal: String) {
        if (modal == "user")
            setOpenModal({ user: !openModal.user, unit: false, asset: false });
        if (modal == "unit")
            setOpenModal({ user: false, unit: !openModal.unit, asset: false });
        if (modal == "asset")
            setOpenModal({
                user: false,
                unit: false,
                asset: !openModal.asset,
            });
    }
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
                    {companyInfo?.name || localCompanyInfo?.name}{" "}
                </Typography.Title>
            </Header>
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
                icon={<PlusCircleOutlined />}
            >
                <FloatButton
                    icon={<UserAddOutlined />}
                    onClick={() => SetModalOpen("user")}
                />
                <FloatButton
                    icon={<ToolOutlined />}
                    onClick={() => SetModalOpen("asset")}
                />
                <FloatButton
                    icon={<FileOutlined />}
                    onClick={() => SetModalOpen("workorder")}
                />
            </FloatButton.Group>
            <ModalUser toggle={openModal.user} action={SetModalOpen} />
            <ModalAsset toggle={openModal.asset} action={SetModalOpen} />
        </Layout>
    );
};
