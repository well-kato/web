import React, { Component } from 'react';

export function Score(props) {
    return (
        <h4>{`${props.playerName}のスコア`}：{props.playerScore}</h4>
    );
}