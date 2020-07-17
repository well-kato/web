import React, { Component } from 'react';

export function CategorySelect(props) {
    const categoryList = props.categoryList.map(category =>
        <option key={category.id} value={category.id}>{category.categoryName}</option>
    );

    return (
        <div className='form-group'>
            <label htmlFor='category'>カテゴリ</label>
            <select id='category' className='form-control' onChange={(e) => props.onChange(e)}>
                {categoryList}
            </select>
        </div>
    );

}