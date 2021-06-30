import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd';

function ListChoose(props) {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    return (
        <div>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </div>
    )
}

ListChoose.propTypes = {

}

export default ListChoose

