import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { IWorkOrders } from "../../../interfaces/WorkOrders";
import { WorkOrderCard } from "../Card";

interface IWorkOrdersProps {
    asset?: Number;
}
export const WorkOrdersList = ({ asset }: IWorkOrdersProps) => {
    const [workOrders, setWorkOrders] = useState<IWorkOrders[]>([]);
    const GetWorkOrders = async () => {
        const { data } = await API.get("/workorders");
        setWorkOrders(data);
    };

    useEffect(() => {
        GetWorkOrders();
    }, []);
    if (asset) {
        return (
            <>
                <Carousel dots={true} dotPosition={"bottom"}>
                    {workOrders.map((items) => (
                        <>
                            {asset == items?.assetId ? (
                                <WorkOrderCard order={items} key={items.id} />
                            ) : null}
                        </>
                    ))}
                </Carousel>
            </>
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
