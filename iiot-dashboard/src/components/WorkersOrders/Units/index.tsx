import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { IWorkOrders } from "../../../interfaces/WorkOrders";

export const WorkOrdersUnits = () => {
    const [workOrders, setWorkOrders] = useState<IWorkOrders[]>([]);

    const GetWorkOrders = async () => {
        const { data } = await API.get("/workorders");

        setWorkOrders(data);
    };

    useEffect(() => {
        GetWorkOrders();
    }, []);

    const columns: ColumnsType<IWorkOrders> = [
        {
            key: 0,

            title: "Title",
            dataIndex: "title",
        },
        {
            key: 1,

            title: "Description",
            dataIndex: "description",
        },
        {
            key: 2,

            title: "Status",
            dataIndex: "status",
        },
        {
            key: 3,

            title: "Priority",
            dataIndex: "priority",
        },
        {
            key: 4,

            title: "Asset",
            dataIndex: "assetId",
        },
        {
            key: 5,

            title: "Assign Users",
            dataIndex: "assignedUserId",
            render: (_, { assignedUserIds }) => (
                <>
                    {assignedUserIds.map((tag) => {
                        let color = tag > 5 ? "geekblue" : "green";
                        if (tag === 1) {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: () => <a>Edit</a>,
        },
    ];

    return (
        <Table
            size="small"
            rowKey={(record) => record.title}
            columns={columns}
            scroll={{ x: 1300 }}
            expandable={{
                expandedRowRender: (record) =>
                    record.checklist.map((e) => (
                        <p key={record.id}>{e.task}</p>
                    )),
            }}
            dataSource={workOrders}
        />
    );
};
