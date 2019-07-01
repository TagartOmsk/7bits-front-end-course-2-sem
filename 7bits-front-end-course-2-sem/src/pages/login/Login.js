import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { I18n } from 'react-redux-i18n';

import './style.css';
import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";
import signIn from "../../actions/user/signIn";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            expectError: true
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

      this.props.login(username, password);
    };

    render() {
        const check = () => this.state.expectError
            && this.props.signInError != null && this.props.signInError.message === '403';

       return (
           <React.Fragment>
               <form
                   className='login-form'
                   onSubmit={this.handleSubmit}
               >
                   <label htmlFor={'login'} className={`login-form__field-label${this.state.user === '' ? '_empty' : ''}`}>
                       {I18n.t('sign-in/up.e-mail')}
                   </label>
                   <FormField
                       className={(check()) ? 'login-form__field_fail' : 'login-form__field'}
                       name='login'
                       placeholder={I18n.t('sign-in/up.e-mail')}
                       value={this.state.user}
                       onChange={this.onChangeUser}
                   />
                   <label htmlFor={'password'} className={`login-form__field-label${this.state.password === '' ? '_empty' : ''}`}>
                       {I18n.t('sign-in/up.password')}
                   </label>
                   <FormField
                       className={(check()) ? 'login-form__field_fail' : 'login-form__field'}
                       name='password'
                       placeholder={I18n.t('sign-in/up.password')}
                       type='password'
                       value={this.state.password}
                       onChange={this.onChangePassword}
                   />
                   <CreateButton
                       className='login-form__button'
                       value={I18n.t('sign-in.submit-button')}
                       disabled={!this.state.user || !this.state.password}
                       type='submit'
                   />
               </form>
               <Link to="/signup" className={'another-page sign-up-link'}>{I18n.t('sign-in.redirect')}</Link>
           </React.Fragment>
       );
    };
}

const mapStateToProps = (state) => ({
    authorized: state.userReducer.authorized,
    signInError: state.userReducer.error
});

const mapDispatchToProps = (dispatch) => ({
   login: bindActionCreators(signIn, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);