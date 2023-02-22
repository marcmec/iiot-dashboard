import { Form, Input, Modal } from "antd";

export const ModalUser = (props: any) => {
    const modalState = props.toggle;
    const action = props.action;

    const [form] = Form.useForm();
    const onCreate = (values: any) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Modal
            title="Create a new User"
            centered
            open={modalState}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                        action("user");
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
            onCancel={() => action("user")}
        >
            <Form
                name="User"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                form={form}
            >
                <Form.Item
                    label="Username"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input a name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: "Please input a email!",
                            type: "email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
