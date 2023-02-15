import { List, Typography } from "antd";

export const WorkersOrderList = () => {
    const data = [
        {
            assetId: 5,
            assignedUserIds: [1, 2, 3],
            checklist: [
                {
                    completed: true,
                    task: "Inspect Fan for visible damage",
                },
                {
                    completed: true,
                    task: "Test Fan for proper operation",
                },
                {
                    completed: true,
                    task: "Replace damaged parts",
                },
            ],
            description:
                "The Fan is not working properly and needs to be repaired.",
            id: 1,
            priority: "high",
            status: "completed",
            title: "Repair Fan D21",
        },
        {
            assetId: 1,
            assignedUserIds: [1, 2, 3],
            checklist: [
                {
                    completed: true,
                    task: "Test motor for overheating",
                },
                {
                    completed: false,
                    task: "Replace damaged parts",
                },
                {
                    completed: false,
                    task: "Test motor for proper operation",
                },
            ],
            description: "The motor is running hot and we must inspect.",
            id: 2,
            priority: "high",
            status: "in progress",
            title: "Repair Motor H13D-1",
        },
        {
            assetId: 3,
            assignedUserIds: [1, 4, 5],
            checklist: [
                {
                    completed: true,
                    task: "Inspect Fan for visible damage",
                },
                {
                    completed: true,
                    task: "Test Fan for proper operation",
                },
                {
                    completed: true,
                    task: "Replace damaged parts",
                },
            ],
            description:
                "The Fan is not working properly and needs to be repaired.",
            id: 2,
            priority: "high",
            status: "completed",
            title: "Repair Fan D22",
        },
    ];

    return (
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data.map((e) => e.description)}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text mark>{item}</Typography.Text>
                    {item}
                </List.Item>
            )}
        />
    );
};
