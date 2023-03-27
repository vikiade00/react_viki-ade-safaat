import React from "react";
import { Button, Form, Input, Select, message, Upload, Radio, Space, InputNumber } from "antd";
import "./contentComponent.css";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import EventButton from "../eventComponent/EventButton";
const { TextArea } = Input;

// upload file ant desgin
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068",
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};

const ContentComponent = () => {
  // form & radio button ant desgin
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="inputForm">
      <h3>Detail Product</h3>
      <Form form={form} layout="vertical">
        <Form.Item label="Product Name">
          <Input placeholder="product name" className="input-text" value={productName} onChange={handleProductNameChange} />
        </Form.Item>

        <Form.Item label="Product Category" className="select-input">
          <Select placeholder="Choose..">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Image of Product">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Product Freshness">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Brand New</Radio>
              <Radio value={2}>Second Hand</Radio>
              <Radio value={3}>Refushbished</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Additional Description">
          <TextArea className="text-area" rows={5} placeholder="Description" />
        </Form.Item>

        <Form.Item label="Product Price">
          <InputNumber placeholder="$ 1" min={1} max={9999999999999} type="number" className="input-number" />
        </Form.Item>

        <Button className="submit-button">Submit</Button>

        <Form.Item label="Event Handling" className="event-handling">
          <EventButton />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContentComponent;
