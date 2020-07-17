import React, { Component } from 'react';
import { ModeSelect } from './Parts/ModeSelect';
import queryString from 'query-string';

const ScreenMode = {
    ModeSelectMode: 1,
    PlayMode: 2,
    ResultMode: 3
}

export class Othello extends Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        if (parsed.player1 && parsed.player2) {
            this.state = {
                screenMode : ScreenMode.PlayMode,
                queryString : parsed
            };
        } else {
            this.state = {
                screenMode : ScreenMode.ModeSelectMode
            };
        }
    }

    render() {
        const screenMode = this.state.screenMode;
        switch (screenMode) {
            case ScreenMode.PlayMode:
                return this.renderPlayMode();
            case ScreenMode.ResultMode:
                return this.renderResultMode();
            default:
                return this.renderModeSelectMode();
        }
    }

    renderModeSelectMode() {
        return (
            <ModeSelect />
        );
    }

    renderPlayMode() {
        return (
            <h1>PlayMode</h1>
        );
    }

    renderResultMode() {
        return (
            <h1>ResultMode</h1>
        );
    }
}