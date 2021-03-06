import { Input } from "antd";
import "antd/dist/antd.css";
import React from "react";
import logo from "../../../../../constant/logo/logo.png";
import "./style.scss";
SearchHeader.propTypes = {};
const { Search } = Input;
const onSearch = (value) => console.log(value);

function SearchHeader(props) {
  return (
    <div className="search">
      <img className="search__logo" src={logo} alt="" />
      <div className="search__input">
      <Search placeholder="Nhập tìm kiếm của bạn" allowClear onSearch={onSearch} />
      </div>
      
    </div>
  );
}

export default SearchHeader;
