import React from 'react';

export function CommonSelect(props) {
    console.log(props);
    const options = props.options.map(option => {
            return <option key={option.value} value={option.value}>{option.text}</option>
        });

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <select className="form-control" id={props.id} name={props.id}>
                {options}
            </select>
        </div>
    );
}