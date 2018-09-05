import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onRegister } from '../actioncreators';
import '../supports/css/Components/loginpage.css';

class RegisterPage extends Component {

    onRegisterClick = () => {
            this.props.onRegister({
                username: this.refs.username.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            });  
    }

    render() {
        if(this.props.auth.username == "") {
            return (
                <div className="login-background">
                    <div className="container">
                        <h1 className="form-heading">Register Page</h1>
                            <div className="login-form">
                            <div className="main-div">
                        <div className="panel">
                            <h2>Sign Up to Enter Our World</h2>
                            <p>Please enter your email and password</p>
                        </div>

                    <form id="Login">

                        <div className="form-group">
                            <input type="text" ref="username" className="form-control" id="inputUsername" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>

                        <input type="button" className="btn btn-primary" value="Register" onClick={this.onRegisterClick} />

                    </form>

                        </div>
                            <p className="botto-text"> Designed by Sunil Rajput</p>
                        </div>
                    </div>
                </div>
            );
        }
        return <Redirect to="/" />
    }
}

const mapStatetoProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStatetoProps, { onRegister })(RegisterPage);