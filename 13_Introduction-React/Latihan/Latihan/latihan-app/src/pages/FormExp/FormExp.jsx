import { Button, Form, Input, Table, Typography, Popconfirm, Space } from "antd";
import React, { useState } from "react";
import { INITIAL_TABLE_DATA } from "./constants";
import Gap from "../../components/gap/Gap";
import Error from "../../components/error/Error";

const FormExp = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [key, setKey] = useState(data.length + 1);
  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState();

  const TABLE_COLUMNS = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm title="Sure to delete?" arrow={false} onConfirm={() => onDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const handleEdit = (data) => {
    setRowData(data);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setRowData();
    form.resetFields();
  };

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
        key: key,
        ...values,
      },
    ];

    setData(newData);
    setKey(key + 1);
    form.resetFields();
  };

  // edit data
  const editData = (values) => {
    const key = rowData?.key;
    const newData = [...data];
    const index = data.findIndex((item) => key === item.key);

    newData.splice(index, 1, {
      key: key,
      ...values,
    });

    setData(newData);
    setIsEdit(false);
    form.resetFields();
  };

  return (
    <div className="form-data">
      <Title>Form Biodata Mahasiswa</Title>

      {/* Form */}
      <Form
        form={form}
        name="bio"
        layout="horizontal"
        onFinish={isEdit ? editData : onAdd}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        fields={[
          {
            name: ["firstName"],
            value: isEdit ? rowData?.firstName : null,
          },
          {
            name: ["lastName"],
            value: isEdit ? rowData?.lastName : null,
          },
          {
            name: ["nim"],
            value: isEdit ? rowData?.nim : null,
          },
          {
            name: ["address"],
            value: isEdit ? rowData?.address : null,
          },
        ]}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Input your first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          label="NIM"
          name="nim"
          rules={[
            {
              required: true,
              message: <Error message={"Please input your nim!"} />,
            },
          ]}
        >
          <Input placeholder="Input your nim" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea placeholder="Input your address" rows={4} />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Space>
        ) : (
          <Form.Item shouldUpdate className="submit">
            {() => (
              <Button type="primary" htmlType="submit" disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0}>
                Submit
              </Button>
            )}
          </Form.Item>
        )}
      </Form>

      <Gap height={30} />

      {/* Table */}
      <Table columns={TABLE_COLUMNS} dataSource={data} />
    </div>
  );
};

export default FormExp;
