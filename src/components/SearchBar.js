import {React, useState} from "react";

function SearchBar({setCity}) {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(inputValue);
        console.log(inputValue);
    };
    return(
        <div className="relative flex w-full flex-wrap items-stretch text-white ">
            <form className="flex items-center max-w-sm mx-auto" onSubmit={handleSubmit}>   
                <input placeholder="Search for a City" className="w-[25rem] h-[2rem] rounded-lg shadow-outline bg-gray-800 bg-opacity-50" onChange={(e) => {setInputValue(e.target.value)}}></input>
                <button className="bg-blue-500 h-[2rem] w-[5rem] rounded-lg text-white ml-2">Submit</button>
            </form>
            <button className="w-20px"></button>
        </div>
    );
};

export default SearchBar;