import React, { Component } from 'react';

export function GameCount(props) {
    return (
        <h4>{`${props.count}回戦`}</h4>
    );
}