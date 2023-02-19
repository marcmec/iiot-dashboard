export interface IWorkOrders {
    assetId: number;
    assignedUserIds: number[];
    checklist: ICheckList[];
    description: string;
    id: number;
    priority: string;
    status: string;
    title: string;
}

export interface ICheckList {
    completed: boolean;
    task: string;
}
