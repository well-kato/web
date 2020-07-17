import React, { Component } from 'react';
import './Choice.css';

export function Choice(props) {

    const choiceList = props.choice.map(c => {
        let className = '';

        if (props.judge !== -1 && c.isCorrect === 1) {
            className = 'alert alert-success';

        } else if (props.judge !== -1 && props.selected === c.id) {
            className = 'selected';

        } 
        return <li key={c.id} className={className} value={c.isCorrect} onClick={(e) => props.onClick(e, c.id)}>{c.choiceText}</li>
    });

    return (
        <div className="quiz_ans_area">
            <ul>
                {choiceList}
            </ul>
        </div>
    );
}