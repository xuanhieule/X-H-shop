import React from "react";
import { Controller } from "react-hook-form";
import "../style/style.scss";

function InputField(props) {
  const { form, name, label, disabled } = props.atribute;
  const {fontSize, width, height, margin} = props.styleInput;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, name, value }) => (
        <div className="textfield-outline" >
          <input
            type="text"
            name={name}
            value={value}
            className="input-outline"
            style={{width:width,height:height}}
            onChange={onChange}
            
          />
          <label>{label}</label>
        </div>
      )}
    />
  );
}
export default InputField;
