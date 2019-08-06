import  React, { Component } from 'react';
import styles from './Button.module.sass';


class Button extends  Component {
    checkValid = () => {
        if(!this.props.isValid) {
            return styles.notValid;
        }
    };

    setClasses = () => {
        return [styles.loginInput, this.checkValid()].join(' ');
    };

    render() {
        const { text } = this.props;
        return (
            <div>{text}</div>
        );
    };
}

export default Button;

