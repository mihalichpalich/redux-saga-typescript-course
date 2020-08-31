import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from 'redux';

import LoginForm from '../../../components/auth/login/loginForm';
import './styles.scss';
import {IRootState} from "../../../redux/reducers/state";
import {ILogin} from "../../../types";
import {AuthActions} from "../../../redux/actions";

type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>;

const LoginContainer = ({signIn}: ILoginContainerProps) => {
    return (
        <div className="login-form-container">
            <LoginForm handleSubmit={signIn} handleError={console.error} />
        </div>
    )
};

const mapStateToProps = (state: IRootState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signIn: (payload: ILogin) => dispatch(AuthActions.signIn(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)