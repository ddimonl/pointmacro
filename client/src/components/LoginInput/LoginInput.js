import  React, { Component } from 'react';

import styles from './LoginInput.module.sass'


class LoginInput extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        }
    }

    onChangeHandler = () => {
        this.props.handlerChange(this.state.val);
    };

    checkValid = () => {
        if(!this.props.isValid) {
            return styles.notValid;
        }
        return null;
    };

    render() {
        const { handler, placeholder, name, type } = this.props;
        return (
            <input onBlur={(e) => {handler(e, name)}}
                   className={[styles.loginInput, this.checkValid()].join(' ')}
                   placeholder={placeholder} type={type}
            />
        );
    }
}

export default LoginInput;

/*const mapStateToProps = (state) => {
    return {
        state,
    }
};

const mapDispatchToProps = (dispatch) => ({
    //loginUserAction: (loginData, redirect) => dispatch(loginUserAction(loginData, redirect)),

});*/

//export default connect(mapStateToProps, mapDispatchToProps)(LoginInput);
