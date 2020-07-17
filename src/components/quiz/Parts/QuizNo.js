import React, { Component } from 'react';
import './QuizNo.css';

export function QuizNo(props) {
    return (
        <div>
            第<span className='quiz_no'>{props.no}</span>問
        </div>
    );
}