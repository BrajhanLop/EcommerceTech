import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
const InputSearch = () => {
    return (
        <>  <div className='header-input-lupa'>
            <AiOutlineSearch/>
            </div>
            <input className='header-search-input' type="text" placeholder='Search' />
        </>
    );
};

export default InputSearch;