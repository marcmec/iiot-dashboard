import { FileAddOutlined, GithubOutlined } from "@ant-design/icons";
import { FloatButton, List } from "antd";
import { useContext, useEffect, useState } from "react";
import { API } from "../../api/axios";
import CompaniesContext from "../../contexts/Companies";
import { ModalCompany } from "../Modals/Company";
import { CardCompany } from "./Company/Card";
export const Companies = () => {
    const [companies, setCompanies] = useState<any>([]);
    const { companiesInfo, setCompaniesInfo } = useContext(CompaniesContext);
    const [openModal, setOpenModal] = useState(false);
    const getCompanies = async () => {
        const { data } = await API.get("/companies");

        setCompanies([
            ...data,
            { id: 2, name: "Another Company", status: "disabled" },
        ]);
        setCompaniesInfo(data);
        localStorage.setItem(
            "companies",
            JSON.stringify([
                ...data,
                { id: 2, name: "Another Company", status: "disabled" },
            ])
        );
    };

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    useEffect(() => {
        getCompanies();
    }, []);
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
                dataSource={companies}
                renderItem={(item) => (
                    <List.Item>
                        <CardCompany item={item} />
                    </List.Item>
                )}
            />
            {/* <FloatButton.Group> */}
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
