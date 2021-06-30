import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../../../../form_controls/input";
import InputPasswordField from "../../../../../../../form_controls/input_password";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import { CloseOutlined } from "@ant-design/icons";
function LoginForm(props) {
  const { handelSetStatus, handleCancel } = props;
  const schema = yup.object().shape({
    username: yup.string().required("Hãy điền tên đăng nhập"),
    password: yup
      .string()
      .required("Hãy điền mật khẩu")
      .min(6, "Mật khẩu phải có tối thiểu 6 ký tự"),
  });
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (value) => {
    // const { onSubmit } = props;
    console.log("Đã submit");
    // if (onSubmit) {
    //   await onSubmit(value);
    // }
  };
  return (
    <div>
      <form action={form.handleSubmit(handleSubmitForm)} className="form">
        <div
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <span>Đăng nhập</span>
          <CloseOutlined
            onClick={handleCancel}
          />
        </div>
        <InputField
          atribute={{
            name: "username",
            label: "Tài khoản",
            form: form,
          }}
          styleInput={{
            width: "100%",
            height: "6rem",
            margin: " 0 0 0 0 ",
          }}
        />
        <InputPasswordField
          atribute={{
            name: "password",
            label: "Mật khẩu",
            form: form,
          }}
          styleInput={{
            width: "100%",
            height: "6rem",
            margin: " 0 0 0 0 ",
          }}
        />
        <span
          style={{
            fontSize: "1.3rem",
            float: "right",
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          Quên mật khẩu?
        </span>{" "}
        <br />
        <button className="form__button form__button--submit " type="submit">
          Đăng nhập
        </button>
        <p
          style={{ fontSize: "1.3rem", margin: "0 0 0 38%", marginLeft: "38%" }}
        >
          Hoặc đăng nhập với
        </p>
        <button className="form__button form__button--fb ">Facebook</button>
        <p style={{ fontSize: "1.3rem", marginLeft: "28%" }}>
          Bạn chưa có tài khoản? Đăng ký{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={() => handelSetStatus("register")}
          >
            tại đây
          </span>
        </p>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  handelSetStatus: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
LoginForm.defaultProps = {
  handelSetStatus: () => {},
  handleCancel: () => {},
};

export default LoginForm;
