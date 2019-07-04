import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import './style.css';
import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";
import signUp from "../../actions/user/signUp";
import signInRedirect from "../../actions/user/signInRedirect";
import flushError from "../../actions/user/flushError";
import { I18n } from "react-redux-i18n";

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
        if (this.state.user === '' || this.state.password === '') {
            this.props.flushError();
        }
        if (this.props.authorized) {
            this.props.history.replace('/');
        }
        if (this.props.signedUp) {
            this.props.signInRedirect();
            this.props.history.replace('/signin');
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
                    <div className={'login-form__field-wrapper'}>
                        <div className={'login-form__field-with-label'}>
                            <label htmlFor={'login'} className={`login-form__field-label${checkUser() ? '_empty' : ''}`}>{I18n.t('sign-in/up.e-mail')}</label>
                            <FormField
                                className={(check()) ? 'login-form__field_fail' : 'login-form__field'}
                                name='login'
                                id={'login'}
                                placeholder={I18n.t('sign-in/up.e-mail')}
                                value={this.state.user}
                                onChange={this.onChangeUser}
                            />
                        </div>
                        <div className={'login-form__field-with-label'}>
                            <label htmlFor={'password'} className={`login-form__field-label${checkPassword() ? '_empty' : ''}`}>{I18n.t('sign-in/up.password')}</label>
                            <FormField
                                className={(check()) ? 'login-form__field_fail' : 'login-form__field'}
                                name='password'
                                id={'password'}
                                placeholder={I18n.t('sign-in/up.password')}
                                type='password'
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                    </div>
                    <div className={`checkbox${!checkBoth() ? ' checkbox_active' : ''}${
                        this.state.checked ? ' checkbox_checked' : ''
                        }`}
                    onClick={this.onCheck}>
                        <label
                            onClick={this.onCheck}
                               className={`agreement-checkbox${
                                   this.state.checked ? ' agreement-checkbox_checked' : ''
                               }${
                                   !checkBoth() ? ' agreement-checkbox_active' : ''}`
                               }
                        >{I18n.t('sign-up.agreement-text')}</label>
                    </div>
                    <CreateButton
                        className='login-form__button'
                        value={I18n.t('sign-up.submit-button')}
                        disabled={checkBoth() || !this.state.checked}
                        type='submit'
                    />
                </form>
                <div className={'link-wrapper'}>
                    <Link to="/signin" onClick={this.props.flushError} className={'another-page sign-in-link'}>{I18n.t('sign-up.redirect')}</Link>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    authorized: state.userReducer.authorized,
    signUpError: state.userReducer.error,
    signedUp: state.userReducer.signedUp
});

const mapDispatchToProps = (dispatch) => ({
    signUp: bindActionCreators(signUp, dispatch),
    signInRedirect: bindActionCreators(signInRedirect, dispatch),
    flushError: bindActionCreators(flushError, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);