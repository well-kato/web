import React, { Component } from 'react';
import './NowCondition.css';

export function NowCondition(props) {
    let display;
    if (props.questionCount !== 1) {
        display = (
            <p className='text-center'>
                前回までの状況：{props.questionCount - 1}問中{props.correctCount}問正解　{Math.round(props.correctCount / (props.questionCount - 1) * 100 * 10) / 10}%
            </p>
        );
    }

    return (
        <div className='now-condition'>
            {display}
        </div>
    );
}