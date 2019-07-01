import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import './style.css';
import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";
import signUp from "../../actions/user/signUp";

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            expectError: true,
            checked: false
        };
    }

    onChangeUser = (event) => {
        this.setState( {
            user: event.target.value,
            expectError: false
        })
    };

    onChangePassword = (event) => {
        this.setState( {
            password: event.target.value,
            expectError: false
        })
    };

    onCheck = () => {
        this.setState( {
            checked: !this.state.checked
        })
    };

    componentDidMount() {
        if (this.props.authorized) {
            this.props.history.replace('/');
        }
    }

    componentDidUpdate() {
        if (this.props.authorized) {
            this.props.history.replace('/');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target['login'].value;
        const password = event.target['password'].value;

        this.setState({
            expectError: true
        });

        this.props.signUp(username, password);
    };

    render() {
        const check = () => this.state.expectError && this.props.signUpError != null;

        const checkUser = () => this.state.user === '';
        const checkPassword = () => this.state.password === '';
        const checkBoth = () => checkUser() || checkPassword();

        return (
            <React.Fragment>
                <form
                    className='login-form'
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor={'login'} className={`login-form__field-label${checkUser() ? '_empty' : ''}`}>E-mail</label>
                    <FormField
                        className={(check()) ? 'login-form__field_fail' : 'login-form__field'}
                        name='login'
                        id={'login'}
                        placeholder='E-mail'
                        value={this.state.user}
                        onChange={this.onChangeUser}
                    />
                    <label htmlFor={'password'} className={`login-form__field-label${checkPassword() ? '_empty' : ''}`}>Password</label>
                    <FormField
                        className={(check()) ? 'login-form__field_fail' : 'login-form__field'}
                        name='password'
                        id={'password'}
                        placeholder='Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                    <div className={`checkbox${!checkBoth() ? ' checkbox_active' : ''}${
                        this.state.checked ? ' checkbox_checked' : ''
                        }`}
                    onClick={this.onCheck}>
                        <input
                            className={'sign-up__checkbox'}
                            type='checkbox'
                            checked={this.state.checked}
                            onChange={this.onCheck}
                            name={'checkbox'}
                            disabled={checkBoth()}
                        />
                        <label
                            onClick={this.onCheck}
                               className={`agreement-checkbox${
                                   this.state.checked ? ' agreement-checkbox_checked' : ''
                               }${
                                   !checkBoth() ? ' agreement-checkbox_active' : ''}`
                               }
                        >I agree to processing of personal data</label>
                    </div>
                    <CreateButton
                        className='login-form__button'
                        value='Sign up'
                        disabled={checkBoth() || !this.state.checked}
                        type='submit'
                    />
                </form>
                <Link to="/signin" className={'another-page sign-in-link'}>Log in</Link>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    authorized: state.userReducer.authorized,
    signUpError: state.userReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    signUp: bindActionCreators(signUp, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);