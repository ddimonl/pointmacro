import  React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from './Nav.module.sass'

class Nav extends  Component {
    render() {
        return (
            <div className={styles.container}>
                <div className="header">
                    <div className={styles.headerInfo}>
                        <div className={styles.number}>(877) 355-3585</div>
                        <div className={styles.loginSignupConntainer}>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>


                {/*<nav>
                <Button />
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/secure">test</Link>
                    </li>
                    <li>
                        <Link to="/startcontest">Start Contest</Link>
                    </li>
                </ul>
            </nav>*/}
            </div>

        );
    }
}

export default Nav;

/*
const mapStateToProps = (state) => {
    return {
        state,
    }
};

const mapDispatchToProps = (dispatch) => ({
    loginUserAction: (loginData) => dispatch(loginUserAction(loginData)),
    /!*deleteUserAction: (id) => dispatch(deleteUserAction(id)),
    addUserAction: () => dispatch(addUserAction())*!/
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login;*/
