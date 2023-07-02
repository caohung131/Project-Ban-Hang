import {
  AccountBookOutlined,
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";
import { Card, Col, Row } from "antd";
import React from "react";

const InterviewHeader = () => {
  return (
    <Row className="interView" justify="space-between">
      <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} xl={6} lg={12}>
              <PayCircleOutlined style={{ fontSize: 56, color: "green" }} />
            </Col>
            <Col xs={24} xl={18} lg={12}>
              <Row>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 17}}>
                  Online Review
                </Col>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 17}}>
                  <h2>
                    <CountUp start={0} end={27654} duration={4.4} />
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} xl={6} lg={12}>
              <TeamOutlined style={{ fontSize: 54, color: "#1890ff" }} />
            </Col>
            <Col xs={24} xl={18} lg={12}>
              <Row>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 17}}>
                  New Customers
                </Col>
                <Col xs={24} xl={24} lg={24}  style={{fontSize: 17}}>
                  <h2>
                    <CountUp start={0} end={8681} duration={4.0} />
                    
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} xl={6} lg={12}>
              <MessageOutlined
                style={{ fontSize: 54, color: "rgb(216, 151, 235)" }}
              />
            </Col>
            <Col xs={24} xl={18} lg={12}>
              <Row>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 18}}>
                  Active Projects
                </Col>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 18}}>
                  <h2>
                    <CountUp start={0} end={271} duration={3.4} />
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} xl={6} lg={12}>
              <ShoppingCartOutlined
                style={{ fontSize: 54, color: "rgb(246, 152, 153)" }}
              />
            </Col>
            <Col xs={24} xl={18} lg={12}>
              <Row>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 17}}>
                  Referrals
                </Col>
                <Col xs={24} xl={24} lg={24} style={{fontSize: 17}}>
                <h2><CountUp start={0} end={18} duration={2}  /></h2>

                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InterviewHeader;
