import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import { INITIAL_TABLE_DATA } from "./constant";
import "./detailProduct.css";
export default function DetailProduct() {
  const { productCode } = useParams();
  const data = productCode
    ? INITIAL_TABLE_DATA.filter((item) => item.productCode == productCode)
    : INITIAL_TABLE_DATA;

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
  ];
  return (
    <div className="detail-product-section">
      <h2>Detail Product {productCode}</h2>
      <Table columns={TABLE_COLUMNS} dataSource={data} />
    </div>
  );
}
