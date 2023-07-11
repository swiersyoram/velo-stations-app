import React from "react";
import { Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
import { AppDispatch } from "../App/store";
import { IAuth } from "../Models/auth.type";
import { ReactComponent as Logo } from "../assets/FullLogo.svg";

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values: IAuth) => {
    dispatch(login(values));
  };

  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <div className={"flex items-center flex-col"}>
        <Logo className={"mb-5"} />
        <Form onFinish={onSubmit}>
          <Form.Item name={"username"} initialValue={""}>
            <input
              type="text"
              placeholder={"Username"}
              className={"w-full  rounded-md border-2 border-gray-300 p-2"}
            />
          </Form.Item>
          <Form.Item name={"password"} initialValue={""}>
            <input
              type="password"
              placeholder={"Password"}
              className={"w-full rounded-md border-2 border-gray-300 p-2"}
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={"w-full bg-blue-500"}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
