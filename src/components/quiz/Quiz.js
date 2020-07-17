import React, { Component } from 'react';
import { getQuestionAndChoiceList } from './QuestionAndChoice';
import { QuizArea } from './Parts/QuizArea';
import { ModeSelect } from './Parts/ModeSelect';
import { Result } from './Parts/Result';

export class Quiz extends Component {
    questionAndChoiceList = [];

    constructor(props) {
        super(props);
        this.state = {
            questionCount: 0,
            correctCount: 0,
            judge: -1,
            selected: -1
        }
    }

    handleModeChoiceButtonClick() {
        const genreId = parseInt(document.getElementById('genre').value);
        const questionNo = parseInt(document.getElementById('question-no').value);
        let questionCount = this.state.questionCount;

        this.questionAndChoiceList = getQuestionAndChoiceList(genreId, questionNo);

        questionCount++;
        this.setState({
            questionCount: questionCount
        });
    }

    handleChoiceClick(e, choiceId) {
        let questionCount = this.state.questionCount;
        let correctCount = this.state.correctCount;
        const correct = parseInt(e.target.value);

        this.setState({
            judge: correct,
            selected: choiceId
        });

        setTimeout(
            () => {
                questionCount++;
                correctCount += correct;

                this.setState({
                    questionCount: questionCount,
                    correctCount: correctCount,
                    judge: -1
                });
            }, 1500);
    }

    handleRetryClick() {
        this.questionAndChoiceList = [];
        this.setState({
            questionCount: 0,
            correctCount: 0
        });
    }


    render() {
        const sumQuestion = this.questionAndChoiceList.length;
        const numCorrect = this.state.correctCount;
        const questionCount = this.state.questionCount;
        const judge = this.state.judge;
        const selected = this.state.selected;
        let display;

        if (questionCount === 0) {
            display = <ModeSelect onClick={() => this.handleModeChoiceButtonClick()} />;

        } else if (questionCount === this.questionAndChoiceList.length + 1) {
            display = <Result sumQuestion={sumQuestion} numCorrect={numCorrect} onClick={() => this.handleRetryClick()} />;

        } else {
            display = <QuizArea questionAndChoice={this.questionAndChoiceList[questionCount - 1]}
                questionCount={questionCount} correctCount={numCorrect}
                onClick={(e, choiceId) => this.handleChoiceClick(e, choiceId)} judge={judge} selected={selected} />;
        }


        return (
            <div>
                {display}
            </div>
        );
    }
}