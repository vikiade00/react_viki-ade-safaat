import React from "react";
import "./createAccount.css";
import logoBoostrap from "../../assets/Bootstrap_logo.svg.png";
import { Table } from "antd";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

const TABLE_COLUMNS = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
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

export default function CreateAccount() {
  return (
    <div>
      <div className="container1">
        <img
          src={logoBoostrap}
          alt="Logo Boostrap"
          width={50}
          className="image-brand"
        />
        <h3>{article.title.en}</h3>
        <p>{article.description.en}</p>
        <Table columns={TABLE_COLUMNS} />
      </div>
    </div>
  );
}
