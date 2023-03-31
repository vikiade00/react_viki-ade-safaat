import { Button, Col, Form, Input, Row, Modal } from "antd";
import React, { useState } from "react";
import "./contactPage.css";
const { TextArea } = Input;

const ContactPage = () => {
  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setIsModalOpen(true);
    setDataModal({ ...values });
  };
  return (
    <div className="contactPage">
      <h2 className="titlePage" id="contact">
        <center>
          <span>C</span>ONTACT
        </center>
      </h2>
      <div className="contactSection">
        <div className="contactContent">
          <Row gutter={100}>
            <Col span={12}>
              <center>
                <h1>Contact Us</h1>
                <p>Need to get in touch with us? Either fill out the form with your inquiry or find the departement email you'd like to contact below</p>
              </center>
            </Col>
            <Col span={12}>
              <Form onFinish={onFinish} autoComplete="off">
                <Form.Item name="firstName" rules={[{ required: true }]} style={{ display: "inline-block", width: "calc(50% - 8px)" }}>
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item name="lastName" rules={[{ required: true }]} style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px 1px 8px" }}>
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item name="email">
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="message">
                  <TextArea rows={6} placeholder="Your Message" />
                </Form.Item>

                <Button htmlType="submit" className="button" type="primary">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>

          <Modal title="Contact Message" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>First Name : {dataModal.firstName}</p>
            <p>Last Name : {dataModal.lastName}</p>
            <p>Your Email : {dataModal.email}</p>
            <p>Your Message : {dataModal.message}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
