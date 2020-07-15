import React, { Component } from 'react';
import { GameTitle } from './GameTitle';
import { GameCount } from './Parts/GameCount';
import { Judge } from './Parts/Judge';
import { ImgList } from './Parts/ImgList';
import { History } from './Parts/History';
import { GameButton } from './Parts/GameButton';

export class HitAndBlow extends Component {
    correctAnswer = [];

    constructor(props) {
        super(props);
        const sixNumber = generateSixNumber();
        this.state = {
            choice: sixNumber,
            selected: [],
            message: '',
            history: []
        }
        this.correctAnswer = generateFourNumberFromSixNumber(sixNumber);
        console.log(this.correctAnswer);
    }

    handleImageClick(i) {
        let selected = this.state.selected.slice();

        if (selected.length < 4 && !selected.includes(i)) {
            selected.push(i);
            this.setState({ selected: selected });
        }
    }

    handleSubmitButton() {
        const selected = this.state.selected.slice();

        if (selected.length !== 4) {
            return;
        }

        const hitAndBlow = calcHitAndBlow(selected, this.correctAnswer);
        let history = this.state.history.slice();
        const message = hitAndBlow.hit === 4 ? '正解' : 'もう1回！';

        history.push({
            selected: selected,
            hit: hitAndBlow.hit,
            blow: hitAndBlow.blow
        });

        this.setState({
            history: history,
            selected: [],
            message: message
        });

    }

    handleClearButton() {
        this.setState({ selected: [] });
    }

    renderButton() {
        const message = this.state.message;
        if (message === '正解') {
            return (
                <div>
                    <a className='btn btn-primary' href='/hit-and-blow'>リトライ</a>
                </div>
            );
        } else {
            return (
                <div>
                    <button className='btn btn-primary' onClick={() => this.handleSubmitButton()}>送信</button>
                    <button className='btn' onClick={() => this.handleClearButton()}>クリア</button>
                </div>
            );
        }
    }


    render() {
        const history = this.state.history;
        const choice = this.state.choice;
        const selected = this.state.selected;
        const message = this.state.message;

        return (
            <div className='row'>
                <div className='col-md-2'>
                    <GameTitle gameTitle='Hit&Blow' />
                    <GameCount count={history.length + 1} />
                    <Judge message={message} />
                </div>
                <div className='col-md-6'>
                    <div style={{ margin: 60 + 'px' }}>
                        <div style={{ height: 70 + 'px' }}>
                            <ImgList array={selected} size={70} isOnClick={false} />
                        </div>
                        <ImgList array={choice} size={70} onClick={(i) => this.handleImageClick(i)} isOnClick={true} />
                        {this.renderButton()}
                    </div>
                </div>
                <div className='col-md-4'>
                    <History history={history} />
                </div>
            </div>
        );
    }
}

function generateSixNumber() {
    let sixNumber = [];
    const min = 1;
    const max = 12;

    while (sixNumber.length < 6) {
        const number = Math.floor(Math.random() * (max + 1 - min)) + min;

        if (!sixNumber.includes(number)) {
            sixNumber.push(number);
        }

    }

    return sixNumber;
}

function generateFourNumberFromSixNumber(sixNumber) {
    let fourNumber = [];

    while (fourNumber.length < 4) {
        const number = Math.floor(Math.random() * sixNumber.length);

        if (!fourNumber.includes(sixNumber[number])) {
            fourNumber.push(sixNumber[number]);
        }
    }
    return fourNumber;
}

function calcHitAndBlow(selected, correctAnswer) {
    let hit = calcHit(selected, correctAnswer);
    let blowOrHit = calcBlowOrHit(selected, correctAnswer);

    return {
        hit: hit,
        blow: blowOrHit - hit
    };
}

function calcHit(selected, correctAnswer) {
    let hit = 0;

    for (let i = 0; i < selected.length; i++) {
        if (selected[i] === correctAnswer[i]) {
            hit++;
        }
    }

    return hit;
}

function calcBlowOrHit(selected, correctAnswer) {
    let blowOrHit = 0;

    for (let i of selected) {
        if (correctAnswer.includes(i)) {
            blowOrHit++;
        }
    }

    return blowOrHit;
}