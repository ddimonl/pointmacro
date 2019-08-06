import  React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import axios from 'axios';

class Test extends  Component {
    render() {
        console.log("render");
        return (
            <div>SECURED PAGE</div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/notforall', {
            headers: {
                Authorization: localStorage.getItem('jwt')
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
            this.props.history.push('/login');
        });
    }
}

export default Test;