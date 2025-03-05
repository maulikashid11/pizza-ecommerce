import React from 'react'

export default function Navbar({query,setQuery}) {
  return (
    <header>
        <nav className='sm:flex p-5 justify-between'>
            <h1 className="logo font-bold text-3xl pb-1">Flavoro Foods</h1>
            <div className="search-input">
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value.toLowerCase())} className='bg-white p-3  max-w-80 text-xl border rounded' placeholder='Search here'/>
            </div>
        </nav>
    </header>
)
}
