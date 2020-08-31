import React, { Suspense, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import 'antd/dist/antd.css';

import { history } from '../redux/store';
import { IRootState } from '../redux/reducers/state';
import { IAuth } from '../types';
import Fallback from '../components/common/fallback';

const HomePage = React.lazy(() => import('../pages/home'));
const LoginPage = React.lazy(() => import('../pages/auth/login'));
const SignUpPage = React.lazy(() => import('../pages/auth/signup'));

interface IMainRouterProps extends RouteProps {
    auth: IAuth,
}

const MainRouter = ({auth}: IMainRouterProps) => {
    return (
        <Router history={history}>
            <Suspense fallback={<Fallback />}>
                <Switch>
                    {
                        auth
                            ? (
                                <Route exact path="/" component={HomePage} />
                            )
                            : (
                                <Fragment>
                                    <Route exact path="/" component={LoginPage} />
                                    <Route exact path="/signup" component={SignUpPage} />
                                </Fragment>
                            )
                    }
                </Switch>
            </Suspense>
        </Router>
    );
};

const mapStateToProps = (state: IRootState): IMainRouterProps => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);


