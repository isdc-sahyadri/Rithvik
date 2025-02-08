"use client"
import React from 'react'
import Header from '../dashboard/_components/Header'
import RemotionPlayer from './_components/RemotionPlayer'
import { Button } from '@/components/ui/button'
import TrackList from './_components/TrackList'

function Editor() {
  return (
    <div>
        <Header/>
        <div className='p-10 md:px-24 lg:px-32'>
            <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Edit Video</h2>
            <Button>Export</Button>
            </div>
            <div className='grid grid-cols-6 gap-7 mt-7'>
                <div>
                    <TrackList/>
                </div>
                <div className='col-span-3'>
                    <RemotionPlayer/>
                </div>
                <div className='col-span-2'>
                    Control Section
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Editor