import React, { Component } from 'react';
import { Card } from './Card.js';
import { Result } from './Result.js';
import { CustomButton } from './CustomButton';
import { GameCount } from './GameCount';
import { PlayerTip } from './PlayerTip';
import { GameTitle } from '../GameTitle';

export class BlackJack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerHand: [],
            dealerHand: [],
            deck: [],
            resultMessage: '',
            finalResultMessage: '',
            gameCount: 1,
            playerTip: 50,
            loading: true
        };
    }

    componentDidMount() {
        this.cardData();
    }

    dealCard(isPlayer) {
        let deck = this.state.deck.slice();
        let playerHand = this.state.playerHand.slice();
        let dealerHand = this.state.dealerHand.slice();

        if (isPlayer) {
            playerHand.push(deck[0]);
        } else {
            dealerHand.push(deck[0]);
        }

        deck.shift();

        return {
            deck: deck,
            playerHand: playerHand,
            dealerHand: dealerHand
        };

    }

    renderHand(isPlayer) {
        const hand = isPlayer ? this.state.playerHand : this.state.dealerHand;
        return hand.map((card, index) =>
            !isPlayer && index === 0 && !this.state.resultMessage ? <Card key={index} card='card_back' /> : <Card key={index} card={card} />
        );
    }



    handleHitButton() {
        if (calcScore(this.state.playerHand) >= 21) {
            return;
        }

        this.setState(this.dealCard(true));
    }

    handleStandButton() {
        if (this.state.resultMessage) {
            return;
        }

        let dealerScore = calcScore(this.state.dealerHand);
        let stateObject;
        while (dealerScore < 17) {
            stateObject = this.dealCard(false);

            this.state.deck = stateObject.deck;
            this.state.playerHand = stateObject.playerHand;
            this.state.dealerHand = stateObject.dealerHand;

            dealerScore = calcScore(this.state.dealerHand);
        }

        if (stateObject) {
            this.setState(stateObject);
        }

        this.judge();
    }

    judge() {
        const playerScore = calcScore(this.state.playerHand);
        const dealerScore = calcScore(this.state.dealerHand);
        let playerTip = this.state.playerTip;

        let resultMessage;

        if (playerScore <= 21 && (playerScore > dealerScore || dealerScore > 21)) {
            playerTip += 10;
            resultMessage = 'プレイヤーの勝ち';
        } else if (playerScore <= 21 && playerScore == dealerScore) {
            resultMessage = '引き分け'
        } else {
            playerTip -= 10;
            resultMessage = 'プレイヤーの負け';
        }
        this.setState({
            playerTip: playerTip,
            resultMessage: resultMessage
        });
    }

    handleNextButton() {
        if (this.state.gameCount >= 5) {
            if (this.state.playerTip > 50) {
                this.setState({ finalResultMessage: 'プレイヤーの勝ち' });
            } else if (this.state.playerTip === 50) {
                this.setState({ finalResultMessage: '引き分け' });
            } else {
                this.setState({ finalResultMessage: 'プレイヤーの負け' });
            }
            return;
        }


        if (this.state.resultMessage) {
            let gameCount = this.state.gameCount;
            gameCount++;
            this.setState({ gameCount: gameCount });

            this.cardData();
        }
    }

    renderButton() {
        if (calcScore(this.state.playerHand) < 21 && !this.state.resultMessage) {
            return (
                <div className='text-center'>
                    <CustomButton onClick={() => this.handleHitButton()} buttonName='Hit' />
                    <CustomButton onClick={() => this.handleStandButton()} buttonName='Stand' />
                </div>
            );
        }

        if (!this.state.resultMessage) {
            return (
                <div className='text-center'>
                    <CustomButton onClick={() => this.handleStandButton()} buttonName='Stand' />
                </div>
            );
        }

        if (this.state.resultMessage) {
            return (
                <div className='text-center'>
                    <CustomButton onClick={() => this.handleNextButton()} buttonName='次へ' />
                </div>
            );
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <p><em>Loading...</em></p>
            );
        } else {
            return (
                <div className='row'>
                    <div className='col-3'>
                        <GameTitle gameTitle='BlackJack'/>
                        <GameCount count={this.state.gameCount} />
                        <PlayerTip tip={this.state.playerTip} />
                        <h2>{this.state.finalResultMessage}</h2>
                    </div>
                    <div className='col-6'>
                        <div className='text-center'>
                            {this.renderHand(false)}
                        </div>
                        <div className='text-center'>
                            <Card card='card_back' />
                        </div>
                        <div className='text-center'>
                            {this.renderHand(true)}
                        </div>
                        {this.renderButton()}
                    </div>
                    <div className='col-3'>
                        <Result playerScore={calcScore(this.state.playerHand)} dealerScore={calcScore(this.state.dealerHand)} resultMessage={this.state.resultMessage} />
                    </div>
                </div>
            );
        }


    }

    cardData() {
        this.state= {
            playerHand: [],
            dealerHand: [],
            deck: this.getCardDeck(),
            resultMessage: ''
        };

        this.setState(this.dealCard(false));
        this.setState(this.dealCard(false));

        this.setState(this.dealCard(true));
        this.setState(this.dealCard(true));
        this.setState({ loading:false });
    }

    getCardDeck() {
        let trumpCard = [];
        for (let i = 1; i <= 4; i++)
        {
            for (let j = 1; j <= 13; j++)
            {
                trumpCard.push(i * 100 + j);
            }
        }

        for(let i = trumpCard.length - 1; i > 0; i--){
            let r = Math.floor(Math.random() * (i + 1));
            let tmp = trumpCard[i];
            trumpCard[i] = trumpCard[r];
            trumpCard[r] = tmp;
        }
        return trumpCard;
    }
}



function calcScore(hand) {
    let isAce = false;
    let sum = 0;
    for (let i = 0; i < hand.length; i++) {
        let n = hand[i];

        if (n % 100 >= 10) {
            sum += 10;
        } else if (n % 100 === 1) {
            isAce = true;
            sum += 1;
        } else {
            sum += n % 100;
        }
    }

    if (isAce) {
        if (sum + 10 <= 21) {
            return sum + 10;
        }
    }

    return sum;
}