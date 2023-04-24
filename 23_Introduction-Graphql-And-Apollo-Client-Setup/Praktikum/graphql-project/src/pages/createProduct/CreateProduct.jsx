import React, { useEffect } from "react";
import { Button, Form, Input, Select, message, Upload, Radio, Space, InputNumber, Table, Popconfirm } from "antd";
import "./createProduct.css";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { INITIAL_TABLE_DATA } from "./constant";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT } from "./query/product-query";
import { useMutation, useQuery } from "@apollo/client";

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

const CreateProduct = () => {
  // form & radio button ant desgin
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [key, setKey] = useState(data.length + 1);
  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState();

  // READ
  const { data: productData, loading: isProductLoading, error: isProductError } = useQuery(GET_PRODUCT);
  console.log(productData?.product);
  // ADD
  const [addProduct, { loading: isAddProductLoading }] = useMutation(ADD_PRODUCT, {
    refetchQueries: [GET_PRODUCT],
  });
  // UPDATE
  const [updateProduct, { loading: loadingUpdateProduct }] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [GET_PRODUCT],
  });
  // DELETE
  const [deleteProduct, { loading: loadingDelete }] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [GET_PRODUCT],
  });

  const { id } = useParams();

  // table colums
  const TABLE_COLUMNS = [
    {
      title: "No",
      dataIndex: "uuid",
      key: "uuid",
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
            <Popconfirm title="Sure to delete?" arrow={false} onConfirm={() => onDelete(record.uuid)}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  // ADD DATA
  const onAdd = (values) => {
    addProduct({
      variables: {
        object: {
          ...values,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  // Edit data
  //   to handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    form.resetFields();
  };

  //   Edit Data from table
  const onEdit = (values) => {
    const uuid = rowData.uuid;

    updateProduct({
      variables: { pk_columns: { uuid: uuid }, _set: { ...values } },
      onCompleted: () => {
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  // Delete data
  const onDelete = (row_id) => {
    deleteProduct({
      variables: { uuid: row_id },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  return (
    <div className="inputForm">
      <h3>Detail Product</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={isEdit ? onEdit : onAdd}
        initialValues={{
          uuid: rowData?.uuid,
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
        <Form.Item
          label="Product Name"
          name="productName"
          rules={[
            { required: true, message: "Product name harus di isi" },
            {
              pattern: /^[a-zA-Z0-9 -]{3,50}$/,
              message: "Product name harus terdiri dari 3-50 characters dan tidak boleh mengandung simbol",
            },
          ]}
        >
          <Input placeholder="product name" className="input-text" />
        </Form.Item>

        <Form.Item label="Product Category" className="select-input" name="productCategory" rules={[{ required: true, message: "Product category tidak boleh kosong" }]}>
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

        <Form.Item
          label="Product Freshness"
          name="productFreshness"
          rules={[
            {
              required: true,
              message: "Product Freshness harus di isi",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={"Brand New"}>Brand New</Radio>
              <Radio value={"Second Hand"}>Second Hand</Radio>
              <Radio value={"Refushbished"}>Refushbished</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Additional Description"
          rules={[
            {
              required: true,
              message: "Additional Description tidak boleh kosong",
            },
          ]}
        >
          <TextArea className="text-area" rows={5} placeholder="Description" />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="productPrice"
          rules={[
            { required: true, message: "Product price tidak boleh kosong" },
            {
              pattern: /^[1-9]\d{0,10}$/,
              message: "Product price dapat diisi antara 1-99999999999",
            },
          ]}
        >
          <InputNumber placeholder="$ 1" min={1} max={9999999999999} type="number" className="input-number" />
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
              <Button className="submit-button" type="primary" htmlType="submit" disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0}>
                Submit
              </Button>
            )}
          </Form.Item>
        )}
      </Form>

      {/* Table */}
      <Table rowKey={id} columns={TABLE_COLUMNS} dataSource={productData?.product} loading={isProductLoading} />
    </div>
  );
};

export default CreateProduct;
