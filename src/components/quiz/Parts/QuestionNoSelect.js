import React, { Component } from 'react';

export function QuestionNoSelect(props) {
    return (
        <div className='form-group'>
            <label htmlFor='question-no'>問題数</label>
            <select id='question-no' className='form-control'>
                <option value={10}>10問</option>
                <option value={20}>20問</option>
                <option value={30}>30問</option>
            </select>
        </div>
    );
}