import React, { Component } from 'react';

export function GenreSelect(props) {
    const genreList = props.genreList.map(genre =>
        <option key={genre.id} value={genre.id}>{genre.genreName}</option>
    );

    return (
        <div className='form-group'>
            <label htmlFor='genre'>ジャンル</label>
            <select id='genre' className='form-control'>
                {genreList}
            </select>
        </div>
    );

}