import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './pages/Login/Login'
import Nav from './pages/Nav/Nav'
import Signup from "./pages/Signup/Signup";
import Test from './pages/Test/Test';
import StartContest from './pages/StartContest/StartContest';
import ContestForm from './pages/ContestForm/ContestForm';
import './App.module.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: localStorage.getItem('token')
        };
    }

    test = () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/api/notforall', {
            headers: {
                Authorization: localStorage.getItem('token')//the token is a variable which holds the token
            }
        })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        console.log(this.state.isAuth);
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={(props) => <Login {...props} test={'test'} />} />
                        <Route path="/signup" component={(props) => <Signup {...props} test={'test'}/>} />
                        <Route path="/secure" component={(props) => <Test {...props} test={'test'}/>} />
                        <Route path="/startcontest" component={(props) => <StartContest {...props} />} />
                        <Route path="/contestform" component={(props) => <ContestForm {...props} />} />
                        <Route path="/" component={(props) => <Nav {...props} test={'test'}/>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
