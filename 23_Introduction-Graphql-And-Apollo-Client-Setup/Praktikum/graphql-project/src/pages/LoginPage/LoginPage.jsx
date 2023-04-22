import { Button, Card, Form, Input, Modal, Radio } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROFILE, GET_PROFILE } from "./query/profile-query";

// option login-register
const options = [
  {
    label: "Login Here",
    value: "login",
  },
  {
    label: "Register Here",
    value: "Register",
  },
];

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [section, setSection] = useState("Login");

  // const graphql get data
  const {
    data: profileData,
    loading: isProfileLoading,
    error: isProfileError,
  } = useQuery(GET_PROFILE);
  console.log(profileData?.profile);

  // const graphql regiter
  const [register, { loading: isRegisterLoading }] = useMutation(ADD_PROFILE, {
    refetchQueries: [GET_PROFILE],
  });

  // on change login-register
  const onChange = ({ target: { value } }) => {
    setSection(value);
    form.resetFields();
  };

  // const login
  const onLogin = (values) => {
    const profile = [...profileData?.profile];
    console.log({ profile });

    const isUser = profile.find((item) => item.username === values.username);

    console.log(isUser);

    const isVerified = JSON.stringify(isUser) === JSON.stringify(values);
    if (isVerified) {
      localStorage.setItem("token", true);
      navigate("/home");
    } else {
      Modal.warning({
        title: "Login Failed!",
        content: "Username/password is not correct",
        centered: true,
        onOk() {
          setSection("Login");
        },
      });
    }
  };

  // const register
  const onRegister = (values) => {
    const profile = [...profileData?.profile];

    // is user existed?
    const isExisted = profile?.some(
      (item) => item.username === values.username
    );

    if (!isExisted) {
      register({
        variables: {
          object: {
            ...values,
          },
        },
        onError: (err) => {
          message.open({
            type: "error",
            content: `${err.message}`,
          });
        },
        onCompleted: () => {
          Modal.success({
            title: "Register Success!",
            content: "Please login using your account",
            centered: true,
            onOk() {
              form.resetFields(), setSection("Login");
            },
          });
        },
      });
    } else {
      Modal.warning({
        title: "Register Failed!",
        content: "Your username has already been used",
        centered: true,
      });
    }
  };

  return (
    <div className="container-center">
      <Card bodyStyle={{ width: "400px" }}>
        <h3>WELCOME !</h3>

        <div className="radio-grup-register-login">
          <Radio.Group
            defaultValue="Login"
            buttonStyle="solid"
            onChange={onChange}
            value={section}
          >
            <Radio.Button value="Login">Login Here</Radio.Button>
            <Radio.Button value="Register">Register Here</Radio.Button>
          </Radio.Group>
        </div>

        <Form
          className="form-login"
          form={form}
          onFinish={section === "Login" ? onLogin : onRegister}
        >
          <Form.Item name="username">
            <Input placeholder="Username" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={isRegisterLoading}
            block
          >
            {section === "Login" ? "Login" : "Register"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
