import React, { Component } from 'react';

export function CustomButton(props) {
    return (
        <button className='btn btn-primary btn-custom' onClick={props.onClick}>{props.buttonName}</button>
    );
}