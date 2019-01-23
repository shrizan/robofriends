import React from 'react'

const SearchBox =({searchChnage})=>{
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="Search Robots"
                onChange={searchChnage}
            />
        </div>
    )
}

export { SearchBox as default }