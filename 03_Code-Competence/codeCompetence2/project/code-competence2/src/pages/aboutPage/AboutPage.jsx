import { Col, Row } from "antd";
import React from "react";
import "./aboutPage.css";
import gambarLaptop1 from "../../assets/588524d86f293bbfae451a31.png";
import gambarLaptop2 from "../../assets/Laptop-PNG-File.png";
const AboutPage = () => {
  return (
    <div className="aboutSection">
      <h2 className="titlePage" id="about">
        <center>
          <span>A</span>BOUT
        </center>
      </h2>
      <div className="aboutContent">
        <Row>
          <Col span={8}>
            <img src={gambarLaptop1} alt="gambar-laptop" width={300} />
          </Col>
          <Col span={15}>
            <h3>Laptop Samsung</h3>
            <p>
              Samsung laptops are known for their high-quality and innovative designs. These laptops are equipped with advanced features that cater to the needs of both personal and professional users. Samsung laptops offer fast charging,
              long battery life, and seamless connectivity options such as Wi-Fi, Bluetooth, and USB-C ports. The company also provides a range of models with touchscreens and stylus pens for a more interactive experience. Samsung laptops
              come in various sizes and configurations, from lightweight and portable to heavy-duty workstations. If you're looking for a reliable and high-performance laptop, Samsung offers a range of options to suit your needs.{" "}
            </p>
          </Col>
          <br />
          <br />
          <Col span={17}>
            <h3>Laptop Acer</h3>
            <p>
              Acer is a well-known brand in the technology industry, and their laptops are a popular choice among users. Acer laptops are known for their durability, reliability, and affordability. The company offers a wide range of models,
              from budget-friendly to high-end configurations, making it accessible to a diverse range of users. Acer laptops are equipped with advanced features such as long battery life, fast charging, and excellent graphics. The company
              also provides various models with touchscreens and stylus pens for a more interactive experience. Acer laptops come in various sizes and configurations, from lightweight and portable to heavy-duty workstations. Overall, Acer
              laptops are a great choice for anyone in need of a reliable and affordable laptop.{" "}
            </p>
          </Col>
          <Col span={4}>
            <img src={gambarLaptop2} alt="gambar-laptop" width={300} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
