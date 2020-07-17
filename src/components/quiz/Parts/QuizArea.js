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
        let renderJudge = <div></div>;

        if (this.props.judge === 1) {
            renderJudge = (
                <div>
                    <div className="quiz_area_bg"></div>
                    <div className="quiz_area_icon true"></div>
                </ div>
            );
        }

        if (this.props.judge === 0) {
            renderJudge = (
                <div>
                    <div className="quiz_area_bg"></div>
                    <div className="quiz_area_icon false"></div>
                </ div>
            );
        }

        return (
            <div className='quiz_area'>
                <NowCondition questionCount={this.props.questionCount} correctCount={this.props.correctCount} />
                <QuizNo no={this.props.questionCount} />
                <Question question={question} />
                <Choice choice={choice} onClick={(e, choiceId) => this.props.onClick(e, choiceId)} selected={this.props.selected} judge={this.props.judge}/>
                {renderJudge}
            </div>
        );
    }
}