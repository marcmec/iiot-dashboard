export interface IAssets {
    assignedUserIds: number[];
    companyId: number;
    healthHistory: IHealthHistory[];
    healthscore: number; //float;
    id: number;
    image: string;
    metrics: {
        lastUptimeAt: "string";
        totalCollectsUptime: number;
        totalUptime: number; //float;
    };
    model: string;
    name: string;
    sensors: string[];
    specifications: {
        maxTemp: number;
        power: number; //float;
        rpm: number;
    };
    status: string;
    unitId: number;
}

interface IHealthHistory {
    status: string;
    timestamp: string;
}
