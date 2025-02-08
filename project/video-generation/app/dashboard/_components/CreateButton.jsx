import React from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {Link} from 'next/link'
  
function CreateButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-black">+ Create New Button</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Let's create a new video</DialogTitle>
            <DialogDescription>
              <div className="flex gap-5 items-center justify-center">
                <Link href="/create-using-AI">
                  <div className="border rounded-lg p-4 flex items-center justify-center gap-4 w-full mt-5 cursor-pointer hover:bg-gray-100">
                    <Image src="/wand.svg" alt="magic wand" width={40} height={40} />
                    <h2 className="text-md font-bold">Generate with AI</h2>
                  </div>
                </Link>
                <Link href="/create-from-scratch">
                  <div className="border rounded-lg p-4 flex items-center justify-center gap-4 w-full mt-5 cursor-pointer hover:bg-gray-100">
                    <Image src="/movie.svg" alt="movie" width={40} height={40} />
                    <h2 className="text-md font-bold">Create from scratch</h2>
                  </div>
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateButton