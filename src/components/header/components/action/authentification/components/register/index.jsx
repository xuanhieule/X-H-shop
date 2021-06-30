import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './components/register_form'

Register.propTypes = {
    
};

function Register(props) {
    return (
        <div>
            <RegisterForm handelSetStatus = {props.handelSetStatus} handleCancel = {props.handleCancel}/>
        </div>
    );
}

export default Register;