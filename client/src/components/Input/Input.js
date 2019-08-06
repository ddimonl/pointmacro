import  React, { Component } from 'react';
import styles from './Input.module.sass';


class Input extends  Component {
    checkValid = () => {
        if(!this.props.isValid) {
            return styles.notValid;
        }
    };

    setClasses = () => {
        return [styles.loginInput, this.checkValid()].join(' ');
    };

    render() {
        const { handler, placeholder, type, name } = this.props;
        return (
            <input
                onBlur={(e) => {handler(e, name)}}
                className={this.setClasses()}
                placeholder={placeholder}
                type={type}
            />
        );
    };
}

export default Input;

