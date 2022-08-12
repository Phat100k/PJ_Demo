import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { store } from "../store/index";
import { Drawer } from "antd";





export const ModalCard = () => {
  const { visible } = useSelector((store) => store.OpenRe);
    const dispatch = useDispatch();

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={() => dispatch({ type: "CLOSE_CARD" })}
      visible={visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
export default ModalCard