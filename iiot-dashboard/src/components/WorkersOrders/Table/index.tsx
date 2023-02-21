import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { API } from "../../../api/axios";
import { ICheckList, IWorkOrders } from "../../../interfaces/WorkOrders";

export const AllworkOrders = () => {
    const [workOrders, setWorkOrders] = useState<IWorkOrders[]>([]);

    const GetWorkOrders = async () => {
        const { data } = await API.get("/workorders");
        data ? localStorage.setItem("workorders", JSON.stringify(data)) : null;

        const localWorkOrders = JSON.parse(localStorage.getItem("workorders")!);

        setWorkOrders(localWorkOrders);
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
            render: (_, { priority }) => (
                <Tag color={priority == "high" ? "red" : "blue"}>
                    {priority}
                </Tag>
            ),
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

    const checkListColumns: ColumnsType<ICheckList> = [
        {
            title: "task",
            dataIndex: "task",
            key: 1,
        },
        {
            title: "Completed",
            dataIndex: "completed",
            key: 1,
            render: (_, { completed }) => (
                <>
                    <p>{String(completed)}</p>
                </>
            ),
        },
    ];

    return (
        <Table
            size="small"
            rowKey={(record) => record.title}
            columns={columns}
            scroll={{ x: 1300 }}
            expandable={{
                expandedRowRender: (record) => (
                    <Table
                        dataSource={record.checklist}
                        columns={checkListColumns}
                    />
                ),
            }}
            dataSource={workOrders}
        />
    );
};
