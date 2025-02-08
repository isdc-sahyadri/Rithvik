import React from 'react'
import { Player } from '@remotion/player'
import { MyComposition } from '@/remotion/Composition'
import RemotionComposition from './RemotionComposition'
import { Fullscreen } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from 'react'

function RemotionPlayer() {
    const [screenSize, setScreensize] =useState({width:500, height:300})
  return (
    <div>
        <div className='item-center '>
                <Player
            component={RemotionComposition}
            durationInFrames={120}
            compositionWidth={screenSize.width}
            compositionHeight={screenSize.height}
            fps={30}
            controls
            style={{borderRadius:6}}
                />
        </div>
        <div className='mt-5 flex gap-2 items-center px-10'>
            <Fullscreen/>
            <Select onValueChange={(v)=>setScreensize(JSON.parse(v))}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="16:9" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={JSON.stringify({width:400, height:400})}>1:1</SelectItem>
                    <SelectItem value={JSON.stringify({width:500, height:300})}>16:9</SelectItem>
                    <SelectItem value={JSON.stringify({width:300, height:500})}>9:16</SelectItem>
                </SelectContent>
            </Select>

        </div>
    </div>
  )
}

export default RemotionPlayer