import { Checkbox } from 'antd';
import React from 'react';

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

