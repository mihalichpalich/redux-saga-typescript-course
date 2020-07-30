import React from 'react';

import './styles.scss';
import SignUpForm from '../../../components/auth/signup/signUpForm';

const SignupContainer = () => {
    return (
        <div className="signup-form-container">
            <SignUpForm handleError={console.error} handleSubmit={console.log} />
        </div>
    )
};

export default SignupContainer