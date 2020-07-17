import React, { Component } from 'react';
import { CategorySelect } from './CategorySelect'
import { GenreSelect } from './GenreSelect';
import { QuestionNoSelect } from './QuestionNoSelect';
import { category } from '../../../data/category';
import { genre } from '../../../data/genre';

export class ModeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: 1
        }
    }

    handleChange(e) {
        this.setState({ categoryId: parseInt(e.target.value) });
    }

    render() {
        const categoryId = this.state.categoryId;
        const genreList = getGenreList(categoryId);

        return (
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 mode-select'>
                    <CategorySelect categoryList={category} onChange={(e) => this.handleChange(e)} />
                    <GenreSelect genreList={genreList} />
                    <QuestionNoSelect />
                    <button className='btn btn-primary' onClick={this.props.onClick}>選択</button>
                </div>
                <div className='col-md-4'></div>
            </div>
        );
    }
}

function getGenreList(categoryId) {
    return genre.filter(g => g.categoryId === categoryId);
}