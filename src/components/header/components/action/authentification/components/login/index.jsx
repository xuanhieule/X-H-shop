import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './loginForm'

Login.propTypes = {
    handelSetStatus : PropTypes.func.isRequired,
};
Login.defaultProps ={
    handelSetStatus : ()=>{},
}

function Login(props) {

    return (
        <div>
            <LoginForm handelSetStatus = {props.handelSetStatus} handleCancel = {props.handleCancel}/>
        </div>
    );
}

export default Login;