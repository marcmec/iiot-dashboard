import { Card, Image, Progress, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { IAssets } from "../../../../interfaces/Assets";
interface IAssetsProps {
    asset: IAssets;
}
export const CardAssetEspecification = ({ asset }: IAssetsProps) => {
    const navigate = useNavigate();
    return (
        <Card
            title={asset?.name}
            hoverable
            size={"small"}
            style={{
                margin: 8,
                backgroundColor: "transparent",
                border: "none",
            }}
            bodyStyle={{
                backgroundColor: "transparent",
            }}
            // style={{ margin: 8, backgroundColor: "#9dbda4", color: "#fbf8e9" }}
            onClick={() => navigate(`${"/company/assets/" + asset.id}`)}
            extra={[
                <>
                    Status:{" "}
                    <Typography.Text mark>{asset?.status}</Typography.Text>
                </>,
            ]}
            headStyle={{ backgroundColor: "#9dbda4" }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 8,
                }}
            >
                <Image
                    src={asset?.image}
                    style={{ maxWidth: 200, height: 100 }}
                />
                <span>Model: {asset?.model}</span>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "10%",
                    }}
                >
                    <div>
                        <span>Health Score</span>
                        <br />
                        <Progress
                            percent={asset?.healthscore}
                            steps={5}
                            strokeColor={[
                                "red",
                                "red",
                                "red",
                                "green",
                                "green",
                            ]}
                        />
                    </div>
                    <div>
                        <Progress
                            type="circle"
                            size="small"
                            percent={asset?.specifications.maxTemp}
                            format={(percent) => `${percent} ˚C`}
                            strokeColor={{
                                "0%": "#108ee9",
                                "60%": "#FAAD14",
                                "100%": "red",
                            }}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};
