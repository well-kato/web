import React, { Component } from 'react';
import { ImgList } from './ImgList';

export function History(props) {

    const historyRow = props.history.map((record, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td><ImgList size={35} array={record.selected} /></td>
            <td>{record.hit}</td>
            <td>{record.blow}</td>
        </tr>
    );
    return (
        <div>
            <h2>履歴</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>選択</th>
                        <th>Hit</th>
                        <th>Blow</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {historyRow}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}