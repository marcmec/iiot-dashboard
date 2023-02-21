// assignAssets health score image metrics model name sensor especifications status unit
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
export const ModalAsset = (props) => {
    const modalState = props.toggle;
    const action = props.action;

    const [form] = Form.useForm();
    const onCreate = (values: any) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Modal
            title="Create a new Asset"
            centered
            open={modalState}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                        action("asset");
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
            onCancel={() => action("asset")}
        >
            <Form
                name="Asset"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                form={form}
            >
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: "Please input a name!",
                        },
                    ]}
                >
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Asset Name"
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
                    label="Asset Model"
                    name="model"
                    rules={[
                        {
                            required: true,
                            message: "Please input a model name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Asset Sensors"
                    name="sensors"
                    rules={[
                        {
                            required: true,
                            message: "Please input name of sensors!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Unit"
                    name="unit"
                    rules={[
                        {
                            required: true,
                            message: "Please input assign unit!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
