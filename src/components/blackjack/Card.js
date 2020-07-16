import React, { Component } from 'react';

export function Card(props) {
    return (
        <img className='trump-image' src={`Trump/${props.card}.png`} />
    );
}