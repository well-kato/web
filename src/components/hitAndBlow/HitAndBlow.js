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
            history: []
        }
        this.correctAnswer = generateFourNumberFromSixNumber(sixNumber);
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

        if (selected.length === 4) {
            this.setState({ selected: [] });
        }
    }

    handleClearButton() {
        this.setState({ selected: [] });
    }


    render() {
        const history = this.state.history;
        const choice = this.state.choice;
        const selected = this.state.selected;
        return (
            <div className='row'>
                <div className='col-3'>
                    <GameTitle gameTitle='Hit&Blow' />
                    <GameCount count={history.length} />
                    <Judge message='正解' />
                </div>
                <div className='col-6'>
                    <ImgList array={selected} size={70} isOnClick={false} />
                    <ImgList array={choice} size={70} onClick={(i) => this.handleImageClick(i)} isOnClick={true} />
                    <GameButton onClick={() => this.handleSubmitButton()} buttonName='送信' />
                    <GameButton onClick={() => this.handleClearButton()} buttonName='クリア' />
                </div>
                <div className='col-3'>
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