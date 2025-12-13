<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Globe2, Home, Plane, Send } from 'lucide-react'
import React from 'react'

const suggestions =[
    {
        title: 'Create New Trip',
        icon: <Globe2 className='text-blue-300 h-5 w-5' />
    }, 
    {
        title: 'Inspire me to Travel',
        icon: <Plane className='text-green-300 h-5 w-5' />
    },
    /*{
        title: 'Discover Hidden Gems',
        icon: <Home className='text-orange-300 h-5 w-5' />
    },*/
    {
        title: 'Adventure',
        icon: <Globe2 className='text-yellow-300 h-5 w-5' />
    },

]



function Hero() {
  return (
    <div className="mt-24 w-full flex flex-col items-center">

      {/* Content */}
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I'm your Personal <br />
          <span className="text-primary">Trip Planner</span>
        </h1>

        <p className="p-2">
=======
"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Globe2, Plane, Send } from "lucide-react"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire me to Travel",
    icon: <Plane className="text-green-400 h-5 w-5" />,
  },
  {
    title: "Adventure",
    icon: <Globe2 className="text-yellow-400 h-5 w-5" />,
  },
]

export default function Hero() {
  return (
    <section className="mt-24 w-full flex flex-col items-center gap-10 px-4">
      
      {/* Heading */}
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
          Hey, I'm your Personal <br />
          <span className="text-primary">Trip Planner</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
>>>>>>> 6667145 (landing-page-ui)
          Your trusted trip planner and adventure guide.
        </p>
      </div>

      {/* Input Box */}
<<<<<<< HEAD
      <div className="border rounded-2xl p-4 shadow relative ">
        <Textarea
          placeholder="Plan a Trip to Goa"
          className="w-[500px] h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
        />
        <Button size={'icon'} className='absolute bottom-6 right-6'>
            <Send className='h-4 w-4'/>
        </Button>
      </div>

      {/* Suggestion list */}
      <div className='w-[500px] flex flex-wrap justify-center gap-3 mt-6'>
            {suggestions.map((suggestions,index)=>(
                <div key={index} className='flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white'>
                    {suggestions.icon}
                    <h2 className='text-sm'>{suggestions.title}</h2>

                </div>  
            ))}
      </div>
            <div className='my-7 mt-14 flex gap-2 text-centre '>Not Sure Where to Start?<strong>Explore Places!</strong></div>

      {/* Video Section */}
    </div>
  )
}

export default Hero
=======
      <div className="relative w-full max-w-[500px] border rounded-2xl p-4 shadow">
        <Textarea
          placeholder="Plan a Trip to Goa"
          className="h-28 bg-transparent border-none focus-visible:ring-0 resize-none"
        />
        <Button size="icon" className="absolute bottom-4 right-4">
          <Send className="h-4 w-4" />
        </Button>
      </div>

      {/* Suggestions */}
      <div className="w-full max-w-[500px] flex flex-wrap justify-center gap-3">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer
                       hover:bg-primary hover:text-white transition-colors"
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Explore Text */}
      <div className="text-center text-sm text-muted-foreground">
        Not sure where to start?{" "}
        <span className="font-semibold text-foreground">
          Explore places!
        </span>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[460px]">
          <HeroVideoDialog
            className="rounded-xl"
            animationStyle="from-center"
            videoSrc="https://www.example.com/dummy-video"
            thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
            thumbnailAlt="Travel preview video"
          />
        </div>
      </div>

    </section>
  )
}
>>>>>>> 6667145 (landing-page-ui)
