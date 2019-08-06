import  React, { Component } from 'react';
import './StartContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import styles from './StartContest.module.sass'
import { Link } from "react-router-dom";
import { loginUserAction } from "../../actions/actionCreator";

class StartContest extends  Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    goTo = (path) => {
        this.props.history.push(path)
    };

    render() {
        console.log("RENDER");
        console.log(this.props);
        return (
            <div className={styles.container}>
                <Link to={{ pathname: "/contest", search: "?type=1" }}>Name</Link>
                <Link to={{ pathname: "/contest", search: "?type=2" }}>Tagline</Link>
                {/*<div onClick={(e, path) => this.goTo('/contestform/')}>Name</div>
                <div onClick={(path) => this.goTo('/contestform')}>Tagline</div>*/}
                <div>Logo</div>
                <div>Name + Logo</div>
                <div>Name + Tagline</div>
                <div>Logo + Tagline</div>
                <div>Logo + Tagline + Logo</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        error: state.loginUserReducers.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    loginUserAction: (loginData, redirect) => dispatch(loginUserAction(loginData, redirect)),

});

export default connect(mapStateToProps, mapDispatchToProps)(StartContest);
