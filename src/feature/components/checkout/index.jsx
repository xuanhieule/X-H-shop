import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../../components/form_controls/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "antd";
import Truck from "./icon/Truck";
import { Select } from "antd";
import "./style.scss";

CheckOut.propTypes = {};

function CheckOut(props) {
  
  const { Option } = Select;
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Hãy điền đầy đủ họ và tên")
      .test(
        "Bạn nên điền ít nhất 2 từ",
        "Hãy điên đúng họ và tên của bạn",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
  });
  const form = useForm({
    defaultValues: {
      fullname: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmitForm = async (value) => {
    //   const {onSubmit} = props;
    //   if(onSubmit){
    //       await onSubmit(value)
    //   }
  };
  const { isSubmitting } = form.formState;
  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  //checkbox
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <Row justify="center">
      <Col sm={24} md={24} lg={14}>
        <div className="checkout">
          <div className="left">
            <h2 className="left__head">Thông tin nhận hàng</h2>
            {/* { isSubmitting && <LinearProgress className={classes.progress} />} */}
            <form
              onSubmit={form.handleSubmit(handleSubmitForm)}
              className="left__form"
            >
              <div className="left__form__customer">
                <InputField
                  className="form__customer__input"
                  atribute={{
                    name: "fullName",
                    label: "Họ và tên",
                    form: form,
                  }}
                  styleInput={{
                    width: "270px",
                    height: "5rem",
                    margin: " 0 0 0 0 ",
                  }}
                />
                <InputField
                  className="form__customer__input"
                  atribute={{
                    name: "sdt",
                    label: "Số điện thoại",
                    form: form,
                  }}
                  styleInput={{
                    width: "270px",
                    height: "5rem",
                    margin: " 0 0 0 0 ",
                  }}
                />
              </div>
              <div className="left__form__select">
                <Select
                  // bordered={false}
                  defaultValue="Tỉnh"
                  style={{
                    width: "17.5rem",
                    color: "##2d3436",
                    fontSize: "1.6rem",
                  }}
                  dropdownStyle={{ color: "#fc6514" }}
                  onChange={handleChange}
                >
                  <Option value="newest">Mới nhất</Option>
                  <Option value="priceIncrease">Giá: Tăng dần</Option>
                  <Option value="priceDecrease">Giá: Giảm dần</Option>
                </Select>
                <Select
                  // bordered={false}
                  defaultValue="Quận/Huyện"
                  style={{
                    width: "17.5rem",
                    color: "#2d3436",
                    fontSize: "1.6rem",
                  }}
                  dropdownStyle={{ color: "#fc6514" }}
                  onChange={handleChange}
                >
                  <Option value="newest">Mới nhất</Option>
                  <Option value="priceIncrease">Giá: Tăng dần</Option>
                  <Option value="priceDecrease">Giá: Giảm dần</Option>
                </Select>
                <Select
                  // bordered={false}
                  defaultValue="Phường/Xã"
                  style={{
                    width: "17.5rem",
                    color: "#2d3436",
                    fontSize: "1.6rem",
                  }}
                  dropdownStyle={{ color: "#fc6514" }}
                  onChange={handleChange}
                >
                  <Option value="newest">Mới nhất</Option>
                  <Option value="priceIncrease">Giá: Tăng dần</Option>
                  <Option value="priceDecrease">Giá: Giảm dần</Option>
                </Select>
              </div>
              <InputField
                atribute={{
                  name: "address",
                  label: "Địa chỉ",
                  form: form,
                }}
                styleInput={{
                  width: "100%",
                  height: "5rem",
                  margin: " 0 0 0 0 ",
                }}
              />
              <InputField
                atribute={{
                  name: "note",
                  label: "Ghi chú",
                  form: form,
                }}
                styleInput={{
                  width: "100%",
                  height: "5rem",
                  margin: " 0 0 0 0 ",
                }}
              />
              <h2 className="left__head">Chọn hình thức thanh toán</h2>
              <div className="ship">
                <Checkbox onChange={onChange}>
                  <div className="ship__method">
                    <Truck />
                    <div className="ship__method__detail">
                      <p className="top">Thanh toán khi nhận hàng (COD)</p>
                      <p className="bot">
                        Miễn phí vận chuyển với mọi đơn hàng trên 300k
                      </p>
                    </div>{" "}
                  </div>
                </Checkbox>
                <br />

                <Checkbox onChange={onChange}>
                  <div className="ship__method">
                    <img
                      className="ship__method__img"
                      src="https://www.coolmate.me/images/logo-zalopay.svg"
                      alt=""
                      width="55"
                    />
                    <div className="ship__method__detail">
                      <p className="top">Ví điện tử ZaloPay</p>
                      <p className="bot">Thẻ ATM/ Internet banking</p>
                    </div>{" "}
                  </div>
                </Checkbox>
                <br />
                <Checkbox onChange={onChange}>
                  <div className="ship__method">
                    <img
                      className="ship__method__img"
                      src="https://www.coolmate.me/images/momo-icon.png"
                      alt=""
                      width="35"
                      height="35"
                    />
                    <div className="ship__method__detail">
                      <p className="top">Ví MOMO</p>
                      <p className="bot">giảm 5%</p>
                    </div>{" "}
                  </div>
                </Checkbox>
              </div>
              <button disabled={isSubmitting} type="submit" className="submit">
                Đặt hàng
              </button>
            </form>
          </div>
          <div className="right">
            <div className="right__head">
              <p>Đơn hàng sẽ được giao từ 3-5 ngày</p>
            </div>
            <div className="right__list-products">
              <img
                className="product__img"
                src="https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/96ADD59D5AB5E7/96ADD59D5AB5E7-FB3CA1666C50-GS0-TC0-BLK/front/medium.jpg"
                alt=""
              />
              <div className="product__info">
                <p className="product__info__name">Áo thun siêu mát</p>
                <p className="product__info__detail">classic T-shirt/While/L</p>
                <div className="product__info__price">
                  <Select
                    bordered={false}
                    defaultValue="1"
                    style={{
                      width: "6rem",
                      color: "#2d3436",
                      fontSize: "1.6rem",
                    }}
                    dropdownStyle={{ color: "#fc6514" }}
                    onChange={handleChange}
                  >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                  </Select>
                  <span className="right__pricetolal">250.000</span>
                </div>
              </div>
            </div>
            <div className="right__price">
              <div className="price-total">
                <span className="price-total__label">Tổng tiền sản phẩm: </span>
                <span className="price-total__price">250000</span>
              </div>
              <div className="price-total">
                <span className="price-total__label">Phí vận chuyển:</span>
                {250000 > 300000 ? (
                  <span className="price-total__price">Miễn Phí</span>
                ) : (
                  <span className="price-total__price">30000</span>
                )}
              </div>
            </div>
            <div className="right__price">
              <div className="price-total">
                <span className="price-total__label">Tổng tiền sản phẩm: </span>
                <span className="price-total__price">250000</span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CheckOut;
