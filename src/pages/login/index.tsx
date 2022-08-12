import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import { InputText } from '../../components/InputText';
import { Navigate } from 'react-router-dom';
import "./style.scss"


export const Login = () => {
  const regexpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const [formLogin, SetFormLogin] = useState({
    username: "",
    password: ""

  });
  const [errorLogin, setErrorLogin] = useState<any>({})
  const onSubmitLogin = (ev) => {
    ev.preventDefault()
    console.log(`formlogin`, formLogin)
    const errorObj:any = {};
    if (!formLogin?.username?.trim()) {
      errorObj.username = "nhập username vào"
    }else if(!regexpEmail.test(formLogin.username)){
      errorObj.username = "Email không đúng định dạng"
    }
    if (!formLogin?.password) {
      errorObj.password = "nhập password vào "
    }
    console.log(`errorObj`, errorObj)
    setErrorLogin(errorObj)
     if (Object.keys(errorObj).length === 0) {
       console.log("thanh coong");
       localStorage.setItem("token", "accessToken");
     }
  }
  const token = localStorage.getItem("token")
  if (token) return <Navigate to="/profile"/>
    return (
      <form onSubmit={(ev) => onSubmitLogin(ev)}>
        {/* <Input /> */}
        <InputText
          type="text"
          placeholder="Email Address *"
          onChange={(ev) => (formLogin.username = ev.target.value)}
          error={errorLogin.username}
        />
        <InputText
          type="password"
          placeholder="Password *"
          onChange={(ev) => (formLogin.password = ev.target.value)}
          error={errorLogin.password}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    );
}
export default Login