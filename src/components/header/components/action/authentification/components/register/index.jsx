import React from 'react';
import RegisterForm from './components/register_form';

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