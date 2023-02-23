import { Modal } from "antd";
import { useContext } from "react";
import WorkOrdersContext from "../../../contexts/WorkOrders";
import { WorkOrderCard } from "../../WorkersOrders/Card";

export const ModalWorkOrder = (props: any) => {
    const { workOrdersInfo } = useContext(WorkOrdersContext);
    const workOrder = workOrdersInfo?.filter((item) => props.item.id == item.id && props.item.title == item.title);
    const modalState = props.toggle;
    const action = props.action;
    return (
        <Modal title="Title" open={modalState} onOk={action} onCancel={action}>
            {workOrder?.map((item) => (
                <WorkOrderCard order={item} />
            ))}
        </Modal>
    );
};
