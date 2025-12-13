import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const menuOptions=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pricing',
        path:'/'
    },
    {
        name:'Contact Us',
        path:'/contact-us'   
    }
]




function Header() 
{
  return (
    <div className='flex justify-between items-center p-4'>
        <div className='flex gap-2 items-center'>
         {/*Logo*/}
            <Image src={'/logo.svg'} alt='logo' width={30} height={30}/>
            <h2 className='font-bold text-2xl'>WanderAI</h2>
        </div>
        {/*Options */}
            <div className='flex gap-8 items-center'>
                {menuOptions.map((menu,index)=>(
                    <Link key={index} href={menu.path}>
                        <h2 className='text-lg hover:scale-105 transition-all'>{menu.name}</h2>
                    </Link>
                ))}
            </div>


        {/*Get Started Button*/}
        <Button> Get Started</Button>
    </div>
  )
}

export default Header;
