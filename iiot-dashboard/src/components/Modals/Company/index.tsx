import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space } from "antd";
import { useState } from "react";
import { IUnits } from "../../../interfaces/Unit";
interface ModalProps {
    open: Boolean;
}
export const ModalCompany = (props: any) => {
    const modalState = props.toggle;
    const action = props.action;
    const [addUnits, setAddUnits] = useState<IUnits[]>([]);
    const [form] = Form.useForm();
    const onCreate = (values: any) => {
        console.log("Received values of form: ", values);
    };
    return (
        <>
            <Modal
                title="Create a new Company"
                centered
                open={modalState}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            form.resetFields();
                            setAddUnits([]);
                            onCreate(values);
                            action("user");
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
                onCancel={action}
            >
                <Form
                    name="dynamic_form_nest_item"
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                >
                    <Form.List name="users" initialValue={addUnits}>
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
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
                                            onClick={() => remove(name)}
                                        />
                                    </Space>
                                ))}
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
                </Form>
            </Modal>
        </>
    );
};
