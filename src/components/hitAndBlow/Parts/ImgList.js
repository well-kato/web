import React, { Component } from 'react';

export function ImgList(props) {
    let imgList;
    if (props.isOnClick) {
        imgList = props.array.map((number) => <img key={number} width={`${props.size}px`} height={`${props.size}px`} src={`img/${number}.png`} onClick={() => props.onClick(number)} />);
    } else {
        imgList = props.array.map((number) => <img key={number} width={`${props.size}px`} height={`${props.size}px`} src={`img/${number}.png`} />);
    }

    return (
        <div>{imgList}</div>
    );
}
