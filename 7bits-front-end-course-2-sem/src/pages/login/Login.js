import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import './style.css';
import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";
import signIn from "../../actions/user/signIn";

class Login extends React.Component {

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

      this.props.login(username, password);
    };

    render() {
       return (
           <form
            className='login-form'
            onSubmit={this.handleSubmit}
           >
               <FormField
               className='login-form__field'
               name='login'
               placeholder='E-mail'
               />
               <FormField
                   className='login-form__field'
                   name='password'
                   placeholder='Password'
                   type='password'
               />
               <CreateButton
                   className='login-form__button'
                   value='Log in'
                   disabled={false}
                   type='submit'
               />
           </form>
       );
    };
}

const mapStateToProps = (state) => ({
    authorized: state.userReducer.authorized
});

const mapDispatchToProps = (dispatch) => ({
   login: bindActionCreators(signIn, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);