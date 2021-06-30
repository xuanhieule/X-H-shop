import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import "./style.scss"
function Cart(props) {
    return (
        <a href="/gio-hang">
            <div className="cart-icon">
            <ShoppingCartOutlined className="cart-icon__icon" />
            <span className="cart-icon__number">1</span>
        </div>
        </a>
    )
}
export default Cart

