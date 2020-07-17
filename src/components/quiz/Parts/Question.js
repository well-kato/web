import React, { Component } from 'react';
import './Question.css'

export function Question(props) {
    return (
        <div className='quiz_question'>
            {props.question}
        </div>
    );
}