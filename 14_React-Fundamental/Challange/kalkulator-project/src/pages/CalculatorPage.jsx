import React from "react";
import "./calculatorPage.css";
import { Input, Form, Button, Col, Row } from "antd";

const { TextArea } = Input;

const CalculatorPage = () => {
  return (
    <div className="card">
      <div className="content">
        <h1 className="header-text">CALCULATOR</h1>
        <Form style={{ maxWidth: 600 }}>
          <TextArea rows={4} />
          <div className="button">
            <Row span={6}>
                <Col span={6}><Button type="primary">1</Button></Col>
                <Col span={6}><Button type="primary">2</Button></Col>
                <Col span={6}><Button type="primary">3</Button></Col>
                <Col span={6}><Button type="primary">4</Button></Col>
                <Col span={6}><Button type="primary">5</Button></Col>
                <Col span={6}><Button type="primary">6</Button></Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CalculatorPage;
