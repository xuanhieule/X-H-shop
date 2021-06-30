import { UserOutlined } from "@ant-design/icons";
import React, { useState } from 'react';
import { Modal, Button } from "antd";
import "./style.scss";
import "antd/dist/antd.css";
import Login from './components/login'
import Register from './components/register'
function Authentification(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = useState("login");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log(isModalVisible)
  };

  const handelSetStatus = (s) =>{
    setStatus(s);
  }
  return (
    <div className="authentidication" onClick={showModal}>
      <UserOutlined className="authentidication__icon" />
      <span> Đăng nhập / </span> &nbsp; <span> Đăng ký</span>
      <div>
        <Modal
          visible={isModalVisible}
          footer={null}
          closable={false}
          centered
          onCancel={handleCancel}
        >
          {status === "login"? <Login handelSetStatus = {handelSetStatus} handleCancel={handleCancel}  /> : <Register  handelSetStatus = {handelSetStatus} handleCancel={handleCancel} />}
        </Modal>
      </div>
    </div>
  );
}

export default Authentification;
