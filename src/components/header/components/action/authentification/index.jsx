import { LoginOutlined } from '@ant-design/icons';
import React from 'react';
import "./style.scss"


function Authentification(props) {
    return (
        <div className="authentidication">
            <LoginOutlined className="authentidication__icon"/>
            <span> Đăng nhập / </span> &nbsp; <span> Đăng ký</span>
        </div>
    );
}

export default Authentification;