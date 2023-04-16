import React, { useState } from "react";
import { Button, Form, Input, Table, Typography, Popconfirm, Space, message } from "antd";
import "./formGraphql.css";
import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./query/users-query";
import { useMutation, useQuery } from "@apollo/client";
import { INITIAL_TABLE_DATA } from "./constant";

const FormGraphql = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
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
            <Popconfirm title="Sure to delete?" arrow={false} onConfirm={() => onDelete(record.uuid)}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

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

    updateUser({
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

  // Read Data
  const { data: usersData, loading: isUsersLoading, error: isUsersError } = useQuery(GET_USERS);
  console.log(usersData?.users);

  // Add Data
  const [addUser, { loading: isAddUsersLoading }] = useMutation(ADD_USER, {
    refetchQueries: [GET_USERS],
  });

  // Delete Data
  const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_USER, {
    refetchQueries: [GET_USERS],
  });

  // Update Data
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER, {
    refetchQueries: [GET_USERS],
  });

  // const onAdd
  const onAdd = (values) => {
    addUser({
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

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteUser({
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
    <div className="form-graphql">
      <h1>Form Biodata Graphql</h1>
      <br />
      <Form
        form={form}
        name="bio"
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
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
              <Button type="primary" htmlType="submit" disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0} loading={isAddUsersLoading}>
                Submit
              </Button>
            )}
          </Form.Item>
        )}
      </Form>

      {/* Table */}
      <Table rowKey="uuid" columns={TABLE_COLUMNS} dataSource={usersData?.users} loading={isUsersLoading} />
    </div>
  );
};

export default FormGraphql;
