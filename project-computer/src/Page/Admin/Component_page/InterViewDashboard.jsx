import {
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import CountUp from 'react-countup';

const InterViewDashboard = () => {
  return (
    <Row className="interView" justify="space-between">
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        className="magin-top-10px cart-itemt-interView"
      >
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} sm={10} md={12} lg={12}>
              <PayCircleOutlined style={{ fontSize: 54, color: "green" }} />
            </Col>
            <Col xs={24} sm={14} md={12} lg={12}>
              <Row>
                <Col xs={24} sm={24} lg={24} style={{ fontSize: 16 }}>
                  Online Review
                </Col>
                <Col xs={24} sm={24} lg={24} style={{ fontSize: 16 }}>
                  <h2>
                    <CountUp start={0} end={27654} duration={4.4} />
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        className="magin-top-10px cart-itemt-interView"
      >
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} sm={10} md={12} lg={12} xl={12}>
              <TeamOutlined style={{ fontSize: 54, color: "#1890ff" }} />
            </Col>
            <Col xs={24} sm={14} md={12} lg={12} xl={12}>
              <Row>
                <Col xs={24} sm={24} lg={24} style={{ fontSize: 16 }}>
                  New Customers
                </Col>
                <Col xs={24} sm={24} lg={24} style={{ fontSize: 16 }}>
                  <h2>
                    <CountUp start={0} end={8681} duration={4.0} />
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        className="magin-top-10px cart-itemt-interView"
      >
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} sm={10} md={12} lg={12} xl={12}>
              <MessageOutlined
                style={{ fontSize: 54, color: "rgb(216, 151, 235)" }}
              />
            </Col>
            <Col xs={24} sm={14} md={12} lg={12} xl={12}>
              <Row>
                <Col xs={24} sm={24} lg={24} style={{ fontSize: 16 }}>
                  Active Projects
                </Col>
                <Col xs={24} sm={24} lg={24} style={{ fontSize: 16 }}>
                  <h2>
                    <CountUp start={0} end={271} duration={3.4} />
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col
        xs={24}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        className="magin-top-10px cart-itemt-interView"
      >
        <Card title="" bordered={false}>
          <Row>
            <Col xs={24} sm={10} md={12} lg={12} xl={12}>
              <ShoppingCartOutlined
                style={{ fontSize: 54, color: "rgb(246, 152, 153)" }}
              />
            </Col>
            <Col xs={24} sm={14} md={12} lg={12} xl={12}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} style={{ fontSize: 16 }}>
                  New Referrals
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} style={{ fontSize: 16 }}>
                  <h2>
                    <CountUp start={0} end={18121} duration={2} />
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InterViewDashboard;
