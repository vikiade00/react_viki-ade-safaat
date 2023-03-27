import { Button, DatePicker, Form, Input, Modal, Radio, Select, Space } from "antd";
import React, { useState } from "react";
import "./formComponent.css";
import dayjs from "dayjs";

const FormComponent = () => {
  const [values, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const { TextArea } = Input;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="62">+62</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setIsModalOpen(true);
    setDataModal({ ...values });
    console.log(setDataModal);
    console.log("Received values of form: ", values);
    console.log(dayjs(values.dateOfBirth).format("DD/MM/YYYY"));
  };

  return (
    <div>
      <div className="formBio">
        <h1>BIODATA</h1>
        <Form
          onFinish={onFinish}
          className="form"
          name="bio"
          layout="vertical"
          labelCol={{
            span: 9,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            minWidth: 600,
            marginBottom: "50px",
          }}
          initialValues={{
            remember: true,
            prefix: "+62",
          }}
          autoComplete="off"
        >
          <Form.Item
            name="firstName"
            label="Firts Name"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="placeOfBirth"
            label="Place Of Birth"
            rules={[
              {
                required: true,
                message: "Please input your Place of Birth!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            label="Date Of Birth"
            rules={[
              {
                required: true,
                message: "Please input your Date of Birth!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please input your Address",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your Valid Email",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>

          <Form.Item
            name="semester"
            label="Semester"
            rules={[
              {
                required: true,
                message: "Please input your Semester",
              },
            ]}
          >
            <Select placeholder="Select Your Semester" width={50}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="religion"
            label="Religion"
            rules={[
              {
                required: true,
                message: "Please input your Religion",
              },
            ]}
          >
            <Radio.Group onChange={onChange}>
              <Space direction="vertical">
                <Radio value="islam">Islam</Radio>
                <Radio value="kristen">Kristen</Radio>
                <Radio value="hindu">Hindu</Radio>
                <Radio value="budha">Budha</Radio>
                <Radio value="katolik">Katolik</Radio>
                <Radio value="konguchu">Konguchu</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="summary"
            label="Sumary"
            rules={[
              {
                required: true,
                message: "Please input your Summary",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Button className="button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>First Name : {dataModal.firstName}</p>
          <p>Last Name : {dataModal.lastName}</p>
          <p>Place Of Birth : {dayjs(dataModal.dateOfBirth).format("DD/MM/YYYY")}</p>
        </Modal>
      </div>
    </div>
  );
};

export default FormComponent;
