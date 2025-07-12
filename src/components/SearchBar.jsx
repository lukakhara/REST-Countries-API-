import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className='flex gap-6 items-center fontRegular
    my-8 mx-2 p-6 rounded-[5px] bg-elements shadow-sm ::placeholder '>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" 
              className='py-2  placeholder:text-text text-text bg-elements outline-none w-full'
              placeholder='Search for a country...' 
              onChange={(e) => setSearchTerm(e.target.value)}
              />
    </div>
  )
}

export default SearchBar