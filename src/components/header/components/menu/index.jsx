import React from 'react'
import "./style.scss"

function Menu(props) {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__list--item">Thời trang</li>
                <li className="menu__list--item">Khẩu trang</li>
                <li className="menu__list--item">Làm đẹp</li>
                <li className="menu__list--item">Điện tử</li>
                <li className="menu__list--item">Phụ kiện</li>
            </ul>
        </div>
    )
}

Menu.propTypes = {

}

export default Menu

