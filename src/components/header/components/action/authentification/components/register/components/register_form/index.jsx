import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../../../../../form_controls/input";
import InputPasswordField from "../../../../../../../../form_controls/input_password";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import { CloseOutlined } from "@ant-design/icons";
function RegisterForm(props) {
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
          <span>Đăng ký</span>
          <CloseOutlined onClick={handleCancel} />
        </div>
        <InputField
          atribute={{
            name: "fullname",
            label: "Họ và tên",
            form: form,
          }}
          styleInput={{
            width: "100%",
            height: "6rem",
            margin: " 0 0 0 0 ",
          }}
        />
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
        <InputField
          atribute={{
            name: "email",
            label: "email",
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
        <InputPasswordField
          atribute={{
            name: "password",
            label: "Nhập lại mật khẩu",
            form: form,
          }}
          styleInput={{
            width: "100%",
            height: "6rem",
            margin: " 0 0 0 0 ",
          }}
        />
        <br />
        <button className="form__button form__button--submit " type="submit">
          Đăng Ký
        </button>

        <p style={{ fontSize: "1.3rem", marginLeft: "28%" }}>
          Bạn đã có tài khoản? Đăng nhập{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={() => handelSetStatus("login")}
          >
            tại đây
          </span>
        </p>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  handelSetStatus: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default RegisterForm;
