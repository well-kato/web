import React, { Component } from 'react';
import { GameStartButton } from './GameStartButton';
import { CommonSelect } from './CommonSelect';

export class ModeSelect extends Component {
    render() {
        const playerOptions = [
            { value : "0", text : "プレイヤー" },
            { value : "1", text : "CPU1" },
            { value : "2", text : "CPU2" },
            { value : "3", text : "CPU3" },
            { value : "4", text : "CPU4" }
        ];
        const mattaOptions = [
            { value : "true", text : "あり" },
            { value : "false", text : "なし" }
        ]
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>モード選択</h1>
                        <form action="othello">
                            <CommonSelect id="player1" label="先行" options={playerOptions} />
                            <CommonSelect id="player2" label="後攻" options={playerOptions} />
                            <CommonSelect id="matta" label="待った" options={mattaOptions} />
                            <GameStartButton />
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}