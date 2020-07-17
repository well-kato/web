import React, { Component } from 'react';

export function Result(props) {
    return (
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 quiz_result'>
                <h1>{Math.round(props.numCorrect / (props.sumQuestion - 1) * 100 * 10) / 10}%</h1>
                <h2>{props.sumQuestion}問中{props.numCorrect}問正解！</h2>
                <button className='btn btn-primary' onClick={props.onClick}>もう一度挑戦する</button>
            </div>
            <div className='col-md-4'></div>
        </div>
    );
}