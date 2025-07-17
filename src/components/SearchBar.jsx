import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className='bg-white flex gap-6 items-center fontRegular w-full max-w-[400px]   sm:w-[40%]
    my-8 pl-4 py-2 rounded-[5px] bg-elements shadow-lg ::placeholder '>
        <FontAwesomeIcon icon={faMagnifyingGlass}  />
        <input type="text" 
              className='py-2  placeholder:text-text text-text bg-elements outline-none w-full'
              placeholder='Search for a country...' 
              onChange={(e) => setSearchTerm(e.target.value)}
              />
    </div>
  )
}

export default SearchBar