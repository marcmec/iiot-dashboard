import { Carousel, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { API } from "../../../api/axios";
import WorkOrdersContext from "../../../contexts/WorkOrders";
import { IWorkOrders } from "../../../interfaces/WorkOrders";
import { WorkOrderCard } from "../Card";

interface IWorkOrdersProps {
    asset?: number;
}
export const WorkOrdersList = ({ asset }: IWorkOrdersProps) => {
    const [workOrders, setWorkOrders] = useState<IWorkOrders[]>([]);
    const { setWorkOrdersInfo } = useContext(WorkOrdersContext);
    const GetWorkOrders = async () => {
        const { data } = await API.get("/workorders");
        setWorkOrders(data);
        setWorkOrdersInfo(data);
    };

    useEffect(() => {
        GetWorkOrders();
    }, []);
    const workOrderFilter = (data: IWorkOrders[]) =>
        data.filter((item) => item.assetId === asset);

    if (asset) {
        return (
            <Row>
                {workOrderFilter(workOrders).map((item) => (
                    <>
                        <Carousel dots={true} dotPosition={"bottom"}>
                            <WorkOrderCard order={item} key={item.id} />
                        </Carousel>
                    </>
                ))}
            </Row>
        );
    } else {
        return (
            <>
                <Carousel autoplay dots={true} dotPosition={"bottom"}>
                    {workOrders.map((items) => (
                        <WorkOrderCard order={items} key={items.id} />
                    ))}
                </Carousel>
            </>
        );
    }
};
