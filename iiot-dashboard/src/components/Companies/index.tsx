import { FileAddOutlined, GithubOutlined } from "@ant-design/icons";
import { FloatButton, List } from "antd";
import { useContext, useEffect, useState } from "react";
import { API } from "../../api/axios";
import CompaniesContext from "../../contexts/Companies";
import { ModalCompany } from "../Modals/Company";
import { CardCompany } from "./Company/Card";
export const Companies = () => {
    const { companiesInfo, setCompaniesInfo } = useContext(CompaniesContext);
    const [openModal, setOpenModal] = useState(false);
    const [companies, setCompanies] = useState(companiesInfo);

    const getCompanies = async () => {
        const { data } = await API.get("/companies");

        setCompaniesInfo(data);
        localStorage.setItem("companies", JSON.stringify(data));
    };

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    useEffect(() => {
        getCompanies();
    }, [companies]);
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#9dbda4",
            }}
        >
            <h1 style={{ color: "white" }}>Choose a Company</h1>

            <List
                pagination={{ pageSize: 2, position: "top" }}
                dataSource={companiesInfo!}
                renderItem={(item) => (
                    <List.Item>
                        <CardCompany item={item} />
                    </List.Item>
                )}
            />
            <FloatButton
                onClick={handleOpenModal}
                type="primary"
                style={{ right: 24 }}
                icon={<FileAddOutlined />}
            />
            <FloatButton
                style={{ right: 94 }}
                onClick={() =>
                    window.open(
                        "https://github.com/marcmec/iiot-dashboard",
                        "_blank"
                    )
                }
                icon={<GithubOutlined />}
            />
            {/* </FloatButton.Group> */}

            <ModalCompany toggle={openModal} action={handleOpenModal} />
        </div>
    );
};
