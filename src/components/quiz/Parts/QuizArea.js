import React, { Component } from 'react';
import { NowCondition } from './NowCondition';
import { QuizNo } from './QuizNo';
import { Question } from './Question';
import { Choice } from './Choice';

import './QuizArea.css';

export class QuizArea extends Component {

    render() {
        const questionAndChoice = this.props.questionAndChoice;
        const question = questionAndChoice.question.questionText;
        const choice = questionAndChoice.choice;

        return (
            <div className='quiz_area'>
                <NowCondition questionCount={this.props.questionCount} correctCount={this.props.correctCount}/>
                <QuizNo no={this.props.questionCount} />
                <Question question={question} />
                <Choice choice={choice} onClick={(e) => this.props.onClick(e)} />
                <div className="quiz_area_bg"></div>
                <div className="quiz_area_icon"></div>
            </div>
        );
    }
}