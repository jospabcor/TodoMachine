import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return(
        
            <input 
                className="TodoSearch" 
                placeholder="cebolla"
                value={searchValue}
                onChange={onSearchValueChange}
            
            />
        
    );
}

export { TodoSearch };