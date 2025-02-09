import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p className='mt-2'>What would you like to create today?</p>
        
        <div className='mt-5 w-full max-w-md'>
            <div className='flex gap-2 items-center p-3 border rounded-lg bg-white text-black shadow-md'>
                <Search className='h-5 w-5 text-gray-500'/>
                <input 
                  type="text" 
                  placeholder='Search' 
                  onChange={(event)=>onSearchInput(event.target.value)}
                  className='w-full outline-none bg-transparent text-black'
                />
            </div>
        </div>
    </div>
  )
}

export default SearchSection
