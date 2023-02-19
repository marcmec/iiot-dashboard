import {
    BarChartOutlined,
    CommentOutlined,
    CustomerServiceOutlined,
    LayoutOutlined,
    TeamOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import { Breadcrumb, FloatButton, Layout, Menu } from "antd";
import { useNavigate, useOutlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export const LayoutDashBoard = ({ children }: any) => {
    const navItems = [
        {
            key: "/company/1", //colocar route com
            icon: <BarChartOutlined />,
            label: "Empresa1",
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
            key: "/logout",
            icon: <UploadOutlined />,
            label: "LogOut",
        },
    ];
    const navigate = useNavigate();
    const outlet = useOutlet();

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
                <Breadcrumb style={{ padding: 16, borderRadius: 4 }}>
                    <Breadcrumb.Item>Company Id</Breadcrumb.Item>
                    <Breadcrumb.Item>Unit id</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Layout style={{ backgroundColor: "#ebbbab" }}>
                <Sider
                    style={{
                        padding: 4,
                        overflow: "auto",
                        height: "100vh",
                        background: "#9dbda4",
                    }}
                >
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        style={{ height: "100%", background: "#9dbda4" }}
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
                </Sider>
                <Content
                    style={{ padding: 16, overflow: "auto", height: "100vh" }}
                >
                    {outlet}
                    {/* <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2023 Created by Ant UED
                    </Footer> */}
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
