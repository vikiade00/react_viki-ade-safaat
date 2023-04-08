import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  message,
  Upload,
  Radio,
  Space,
  InputNumber,
  Table,
  Popconfirm,
} from "antd";
import "./contentComponent.css";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { INITIAL_TABLE_DATA } from "./constant";
import { v4 as uuidv4 } from "uuid";

// upload file ant desgin
const generateRandomNumber = () => {
  const uuid = uuidv4();
  const shortUuid = uuid.substr(0, 8); // ambil 8 karakter pertama dari UUID
  const decimal = parseInt(shortUuid, 16); // ubah 8 karakter tersebut menjadi angka desimal
  const fourDigitNumber = decimal % 10000; // ambil 4 digit terakhir dari angka desimal tersebut
  return fourDigitNumber;
};
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
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [key, setKey] = useState(data.length + 1);
  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState();

  // table colums
  const TABLE_COLUMNS = [
    {
      title: "No",
      dataIndex: "productCode",
      key: "productCode",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Product Freshness",
      dataIndex: "productFreshness",
      key: "productFreshness",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  // delete data
  const onDelete = (row_key) => {
    const newData = data.filter((item) => item.key !== row_key);
    setData(newData);
  };

  //   add data
  const onAdd = (values) => {
    const newData = [
      ...data,
      {
        id: uuidv4(),
        key: key,
        ...values,
        productCode: generateRandomNumber(),
      },
    ];

    setData(newData);
    setKey(key + 1);
    form.resetFields();
  };

  // edit data
  const handleEdit = (data) => {
    setRowData(data);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setRowData();
    form.resetFields();
  };

  const editData = (values) => {
    const key = rowData?.key;
    const newData = [...data];
    const index = data.findIndex((item) => key === item.key);
    const updatedData = {
      ...newData[index],
      ...values,
    };
    newData.splice(index, 1, updatedData);

    setData(newData);
    setIsEdit(false);
    form.resetFields();
  };

  return (
    <div className="inputForm">
      <h3>Detail Product</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={isEdit ? editData : onAdd}
        initialValues={{
          productCode: rowData?.productCode,
        }}
        fields={[
          {
            name: ["productName"],
            value: isEdit ? rowData?.productName : null,
          },
          {
            name: ["productCategory"],
            value: isEdit ? rowData?.productCategory : null,
          },
          {
            name: ["productFreshness"],
            value: isEdit ? rowData?.productFreshness : null,
          },
          {
            name: ["productPrice"],
            value: isEdit ? rowData?.productPrice : null,
          },
        ]}
      >
        <Form.Item label="Product Name" name="productName">
          <Input placeholder="product name" className="input-text" />
        </Form.Item>

        <Form.Item
          label="Product Category"
          className="select-input"
          name="productCategory"
        >
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

        <Form.Item label="Product Freshness" name="productFreshness">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={"Brand New"}>Brand New</Radio>
              <Radio value={"Second Hand"}>Second Hand</Radio>
              <Radio value={"Refushbished"}>Refushbished</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Additional Description">
          <TextArea className="text-area" rows={5} placeholder="Description" />
        </Form.Item>

        <Form.Item label="Product Price" name="productPrice">
          <InputNumber
            placeholder="$ 1"
            min={1}
            max={9999999999999}
            type="number"
            className="input-number"
          />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
            <br />
          </Space>
        ) : (
          <Form.Item shouldUpdate className="submit">
            {() => (
              <Button
                className="submit-button"
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  form.getFieldsError().filter(({ errors }) => errors.length)
                    .length > 0
                }
              >
                Submit
              </Button>
            )}
          </Form.Item>
        )}
      </Form>

      {/* Table */}
      <Table columns={TABLE_COLUMNS} dataSource={data} />
    </div>
  );
};

export default ContentComponent;
