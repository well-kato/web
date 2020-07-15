import React, { Component } from 'react';

export function GameButton(props) {
    return (
        <button className='btn btn-primary' onClick={props.onClick}>{props.buttonName}</button>
    );
}