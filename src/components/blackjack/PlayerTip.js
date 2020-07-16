import React, { Component } from 'react';

export function PlayerTip(props) {
    return (
        <h4>{`プレイヤーのチップ：${props.tip}`}</h4>
    );
}