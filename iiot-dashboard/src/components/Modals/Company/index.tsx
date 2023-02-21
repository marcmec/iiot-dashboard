import { Modal } from "antd";

interface ModalProps {
    open: Boolean;
}
export const ModalCompany = (open: any) => {
    return (
        <>
            <Modal
                title="Create a new Company"
                centered
                open={open ? true : false}
                onOk={() => !open}
                onCancel={() => !open}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};
