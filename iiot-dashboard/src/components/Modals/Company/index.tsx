import { Form, Input, Modal } from "antd";
import { useContext } from "react";
import CompaniesContext from "../../../contexts/Companies";

export const ModalCompany = (props: any) => {
    const modalState = props.toggle;
    const action = props.action;
    const [form] = Form.useForm();
    const { companiesInfo, setCompaniesInfo } = useContext(CompaniesContext);
    const localStorageCompanies = JSON.parse(
        localStorage.getItem("companies")!
    );
    const onCreate = (values: any) => {
        console.log("Received values of form: ", values);

        localStorage.setItem(
            "companies",
            JSON.stringify([
                ...localStorageCompanies,
                { id: localStorageCompanies.length + 1, name: values.name },
            ])
        );
        setCompaniesInfo([...localStorageCompanies]);
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
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
                onCancel={action}
            >
                <Form
                    name="company"
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        name={"name"}
                        rules={[
                            {
                                required: true,
                                message: "Please input a name for company",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                {/* <h1>{JSON.parse(JSON.stringify(companiesInfo))}</h1> */}
            </Modal>
        </>
    );
};

// <Form.List name="users" initialValue={addUnits}>
// {(fields, { add, remove }) => (
//     <>
//         {fields.map(({ key, name, ...restField }) => (
//             <Space
//                 key={key}
//                 style={{
//                     display: "flex",
//                     marginBottom: 8,
//                 }}
//                 align="baseline"
//             >
//                 <Form.Item
//                     {...restField}
//                     name={[name, "first"]}
//                     rules={[
//                         {
//                             required: true,
//                             message:
//                                 "Missing unit name",
//                         },
//                     ]}
//                 >
//                     <Input placeholder="Unit Name" />
//                 </Form.Item>
//                 <MinusCircleOutlined
//                     onClick={() => remove(name)}
//                 />
//             </Space>
//         ))}
//         <Form.Item>
//             <Button
//                 type="dashed"
//                 onClick={() => add()}
//                 block
//                 icon={<PlusOutlined />}
//             >
//                 Add Unit
//             </Button>
//         </Form.Item>
//     </>
// )}
// </Form.List>
