import { Col, Image, Row } from "antd";

export const DashBoard = () => {
    return (
        <>
            <div style={{ color: "black" }}>
                <Row gutter={[16, 8]}>
                    <Col span={8}>
                        <Col>
                            <Image
                                src="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
                                width={300}
                            />
                        </Col>
                        <Col span={12}>
                            List of characteristics to choose and see
                        </Col>
                    </Col>
                    <Col span={8}>
                        <div> main characteristics</div>
                    </Col>

                    <Col span={8}>
                        <div>stats of model</div>
                        <Col>
                            <div>stats</div>
                        </Col>
                    </Col>
                </Row>
            </div>
        </>
    );
};
