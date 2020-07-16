import React, { Component } from 'react';
import { Score } from './Score.js';

export function Result(props) {
    return (
        <div>
            <Score playerName='プレイヤー' playerScore={props.playerScore} />
            <h3>{props.resultMessage}</h3>
        </div>
    );
}