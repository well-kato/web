import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            メニュー
                        </div>
                        <div className="list-group">
                            <Link to="/quiz" className="list-group-item">QuizApp</Link>
                            <Link to="/hit-and-blow" className="list-group-item">Hit&Blow</Link>
                            <Link to="/blackjack" className="list-group-item">BlackJack</Link>
                            <Link to="/othello" className="list-group-item">Othello</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
