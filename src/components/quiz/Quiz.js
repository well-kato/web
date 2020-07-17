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
            correctCount: 0
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

    handleChoiceClick(e) {
        let questionCount = this.state.questionCount;
        let correctCount = this.state.correctCount;
        const correct = parseInt(e.target.value);
        const clicObject = e.target;

        document.getElementsByClassName('quiz_area_bg')[0].style.display = 'block';
        clicObject.classList.add('selected');

        if (correct === 1) {
            document.getElementsByClassName('quiz_area_icon')[0].classList.add('true');
        } else {
            document.getElementsByClassName('quiz_area_icon')[0].classList.add('false');
        }

        setTimeout(
            () => {
                clicObject.classList.remove('selected');
                document.getElementsByClassName('quiz_area_icon')[0].classList.remove('true', 'false');
                document.getElementsByClassName('quiz_area_bg')[0].style.display = 'none';
                questionCount++;
                correctCount += correct;

                this.setState({
                    questionCount: questionCount,
                    correctCount: correctCount
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
        let display;

        if (questionCount === 0) {
            display = <ModeSelect onClick={() => this.handleModeChoiceButtonClick()} />;

        } else if (questionCount === this.questionAndChoiceList.length + 1) {
            display = <Result sumQuestion={sumQuestion} numCorrect={numCorrect} onClick={() => this.handleRetryClick()} />;

        } else {
            display = <QuizArea questionAndChoice={this.questionAndChoiceList[questionCount - 1]}
                questionCount={questionCount} correctCount={numCorrect} onClick={(e) => this.handleChoiceClick(e)} />;
        }


        return (
            <div>
                {display}
            </div>
        );
    }
}