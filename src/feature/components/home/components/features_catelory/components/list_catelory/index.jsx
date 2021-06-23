import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from "antd";

ListCatelory.propTypes = {
    catelory : PropTypes.object.isRequired,
}
ListCatelory.defauldProps = {
    catelory : {} 
}

function ListCatelory(props) {
    const {catelory} = props;
    return (
        <div>
            <Col sx={12} sm={8} md={8} lg={8} xl={4} xxl={4}  key={catelory.id} align="center">
            <a href={catelory.link}>
              <div
                className="catelory"
                style={{ background: catelory.background }}
              >
                <span className="catelory__name">{catelory.name}</span>
                <img src={catelory.img} alt="" className="catelory__img" />
              </div>
            </a>
          </Col>
            
        </div>
    )
}



export default ListCatelory

