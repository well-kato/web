import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { HitAndBlow } from './components/hitAndBlow/HitAndBlow';
import { BlackJack } from './components/blackjack/BlackJack';
import { Othello } from './components/othello/Othello';
import { Quiz } from './components/quiz/Quiz';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/hit-and-blow' component={HitAndBlow} />
                <Route exact path='/blackjack' component={BlackJack} />
                <Route exact path='/othello' component={Othello} />
                <Route exact path='/quiz' component={Quiz} />
            </Layout>
        );
    }
}
