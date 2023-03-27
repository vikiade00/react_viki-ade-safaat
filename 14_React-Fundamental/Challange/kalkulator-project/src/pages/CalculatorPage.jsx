import React, { useState } from "react";
import "./calculatorPage.css";
import { Input, Form, Button, Col, Row } from "antd";
import logo from "../assets/logokalkulator.jpg";
const { TextArea } = Input;
const [isClick, setIsClick] = useState(0);

const CalculatorPage = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">
          <img className="logo" src={logo} alt="" />

          <h5 className="header-text">CALCULATOR</h5>
        </div>

        <Form style={{ maxWidth: 600 }}>
          <TextArea className="text-area" rows={4} style={{ height: 100, resize: "none" }} readOnly />
          <div className="button">
            <Row span={6}>
              <Col span={6}>
                <Button type="primary" value={7} onClick={isClick}>
                  7
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">8</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">9</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">x</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">4</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">5</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">6</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">-</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">1</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">2</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">3</Button>
              </Col>
              <Col span={6}>
                <Button type="primary">+</Button>
              </Col>
            </Row>
            <Button id="button-0" type="primary">
              0
            </Button>
            <Button id="buttonKoma" type="primary">
              .
            </Button>
            <Button type="primary">=</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CalculatorPage;
