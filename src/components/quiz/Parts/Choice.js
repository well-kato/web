import React, { Component } from 'react';
import './Choice.css';

export function Choice(props) {

    const choiceList = props.choice.map(c =>
        <li key={c.id} value={c.isCorrect} onClick={(e)=>props.onClick(e)}>{c.choiceText}</li>
    );

    return (
        <div className="quiz_ans_area">
            <ul>
                {choiceList}
            </ul>
        </div>
    );
}