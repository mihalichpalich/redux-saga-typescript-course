import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from 'redux';

import './styles.scss';
import SignUpForm from '../../../components/auth/signup/signUpForm';
import {ISignUp} from "../../../types";
import {AuthActions} from "../../../redux/actions";

type ISignUpContainerProps = ReturnType<typeof mapDispatchToProps>;

const SignupContainer = ({signUp}: ISignUpContainerProps) => {
    return (
        <div className="signup-form-container">
            <SignUpForm handleSubmit={signUp} handleError={console.error}/>
        </div>
    )
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signUp: (payload: ISignUp) => dispatch(AuthActions.signUp(payload))
});

export default connect(null, mapDispatchToProps)(SignupContainer)