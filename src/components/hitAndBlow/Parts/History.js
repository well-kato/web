import React, { Component } from 'react';
import { ImgList } from './ImgList';

export function History(props) {

    let historyRow = props.history.map((record, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td><ImgList size={20} array={record.selected} /></td>
            <td>{record.hit}</td>
            <td>{record.blow}</td>
        </tr>
    );

    historyRow.reverse();
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
                    {historyRow}
                </tbody>
            </table>
        </div>
    );
}