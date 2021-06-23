import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import "./style.scss"
function Cart(props) {
    return (
        <div className="cart">
            <ShoppingCartOutlined className="cart__icon" />
            <span className="cart__number">1</span>
        </div>
    )
}



export default Cart

