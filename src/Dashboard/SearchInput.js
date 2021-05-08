import React from 'react'
import { BsSearch } from "react-icons/bs";
import Select from 'react-select';
import "./search.css";
function SearchInput() {
    // const handelesearch = (e) =>{
    //     e.target.value;
    // }
    
    return (
        <div className="search">
             <BsSearch className="search-icon" />
             <input type="text" placeholder="search here.." />

             
        </div>
    )
}

export default SearchInput
