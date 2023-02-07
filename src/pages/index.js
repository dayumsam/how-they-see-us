import Image from 'next/image'
import Navbar from "@/components/Navbar"
import map from '../../public/world.png'

import Tippy from '@tippyjs/react';

export default function index() {

  const download = () => {
    alert('hello')
  }

  return (
    <>
    <Navbar/>
    <p className='text-5lg font-bold  py-1 text-center'>Find Out</p>
    <h1 className='text-5xl font-bold pb-2 text-center'>How do people see you?</h1>
    <p className='text-5lg font-semibold  py-6 text-center'>Click on different countries to see their story</p>

    <div className='relative w-full'>
      <Tippy content="Calgary">
        <div id="my-anchor-element" className="beacon absolute w-4 h-4 bg-dark rounded-full origin-center top-[22%] left-[13%] z-[10] hover:cursor-pointer" onClick={download}/>
      </Tippy>
      <Image className="w-full py-10" alt='map-image' src={map} priority/>
    </div>
    </>
  )
}
