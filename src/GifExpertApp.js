import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const handleAdd = (newCategory) => {
        setCategories([newCategory,...categories]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory handleAdd={handleAdd}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={ category }
                            category={category} />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;