import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { React, useState } from "react";
import { Controller } from "react-hook-form";
import "./style.scss";

function InputPasswordField(props) {
  const { form, name, label, disabled } = props.atribute;
  const { width, height } = props.styleInput;
  const [passwordShown, setPasswordShown] = useState(false);
  const [eye, setEye] = useState(<EyeOutlined />);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    passwordShown ? setEye(<EyeInvisibleOutlined />) : setEye(<EyeOutlined />);
  };
  return (
    <Controller
      disabled={disabled}
      name={name}
      control={form.control}
      render={({ onChange, name, value }) => (
        <div className="textfield-outline">
          <input
            type={passwordShown ? "text" : "password"}
            name={name}
            value={value}
            className="input-outline"
            style={{ width: width, height: height }}
            onChange={onChange}
          />
          <label>{label}</label>
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
      )}
    />
  );
}

export default InputPasswordField;
