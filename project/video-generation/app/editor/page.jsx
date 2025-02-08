import React from 'react'
import Header from './_components/Header'

function Editor() {
  return (
    <div>
        <Header/>
        <div className='p-10 md:px-24 lg:px-32'>
            <h2 className='text-2xl font-bold'>Edit Video</h2>
            <div>
                <div>
                    Track List
                </div>
                <div>
                    Video Player
                </div>
                <div>
                    Control Section
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Editor