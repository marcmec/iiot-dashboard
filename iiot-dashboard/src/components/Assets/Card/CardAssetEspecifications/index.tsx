import { Card, Image, Progress, Typography } from "antd";
import { useNavigate } from "react-router-dom";

export const CardAssetEspecification = ({ asset }) => {
    const navigate = useNavigate();
    return (
        <Card
            title={asset?.name}
            hoverable
            size={"small"}
            style={{ margin: 8, backgroundColor: "#9dbda4", color: "#fbf8e9" }}
            bodyStyle={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
            }}
            onClick={() => navigate(`${"/company/assets/" + asset.id}`)}
        >
            <Image src={asset?.image} style={{ maxWidth: 200, height: 100 }} />
            Status: <Typography.Text mark>{asset?.status}</Typography.Text>
            Model: <Typography.Text>{asset?.model}</Typography.Text>
            <p>Health Score</p>
            <Progress percent={asset?.healthscore} steps={10} />
            <br />
            <p>MaxTemp</p>
            <Progress
                type="circle"
                percent={asset?.specifications.maxTemp}
                format={(percent) => `${percent} ˚C`}
                strokeColor={{
                    "0%": "#108ee9",
                    "50%": "#FAAD14",
                    "100%": "red",
                }}
            />
        </Card>
    );
};
