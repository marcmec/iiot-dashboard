import {
    FileAddOutlined,
    MinusCircleOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    FloatButton,
    Form,
    Input,
    List,
    Modal,
    Space,
} from "antd";
import { useContext, useEffect, useState } from "react";
import { API } from "../../api/axios";
import CompaniesContext from "../../contexts/Companies";
import { IUnits } from "../../interfaces/Unit";
import { CardCompany } from "./Company/Card";
export const Companies = () => {
    const [companies, setCompanies] = useState<any>([]);
    const { companiesInfo, setCompaniesInfo } = useContext(CompaniesContext);
    const [modalCreateCompany, setModalCreateCompany] = useState(false);
    const [addUnits, setAddUnits] = useState<IUnits[]>([]);
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
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log("Received values of form:", values);
        form.submit();
    };

    useEffect(() => {
        getCompanies();
    }, [modalCreateCompany]);
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
            <h1 style={{ color: "white" }}>Choose Company</h1>
            <List
                dataSource={companies}
                renderItem={(item) => (
                    <List.Item>
                        <CardCompany item={item} />
                    </List.Item>
                )}
            />
            <FloatButton
                onClick={() => setModalCreateCompany(true)}
                type="primary"
                style={{ right: 24 }}
                icon={<FileAddOutlined />}
            />
            <Modal
                open={modalCreateCompany}
                onOk={() => setModalCreateCompany(false)}
                onCancel={() => setModalCreateCompany(false)}
                title={"Create Company"}
            >
                <Card>
                    <Input placeholder="Title's Company" />
                    <Card>
                        <Form
                            name="dynamic_form_nest_item"
                            onFinish={onFinish}
                            style={{ maxWidth: 600 }}
                            autoComplete="off"
                        >
                            <Form.List name="users" initialValue={addUnits}>
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(
                                            ({ key, name, ...restField }) => (
                                                <Space
                                                    key={key}
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: 8,
                                                    }}
                                                    align="baseline"
                                                >
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, "first"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Missing unit name",
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Unit Name" />
                                                    </Form.Item>
                                                    <MinusCircleOutlined
                                                        onClick={() =>
                                                            remove(name)
                                                        }
                                                    />
                                                </Space>
                                            )
                                        )}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                block
                                                icon={<PlusOutlined />}
                                            >
                                                Add Unit
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item></Form.Item>
                        </Form>
                    </Card>
                </Card>
            </Modal>
        </div>
    );
};
