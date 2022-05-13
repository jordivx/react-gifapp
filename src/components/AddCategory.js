import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({handleAdd}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            handleAdd(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                typeof='text'
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    handleAdd: PropTypes.func.isRequired
}