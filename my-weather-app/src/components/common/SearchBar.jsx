import React from 'react'

function SearchBar() {
  return (
    <div className='search'>
    <div className='search-top'>
    <i class="bi bi-geo-alt-fill"></i>
    <div className='location'>London</div>
    </div>
    <div className="search-bar">
      <input type="text" placeholder='Enter Location' />
      <i className="bi bi-search"></i>
    </div>

</div>
  )
}

export default SearchBar