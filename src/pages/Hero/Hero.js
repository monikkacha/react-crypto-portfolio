import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='w-screen h-screen hero-main-bg relative")]'>
            <div className='h-[300px] w-[300px] circle-blur rounded-full absolute top-[200px] left-0 hidden md:block' />
            <div className='h-[300px] w-[300px] circle-blur rounded-full absolute bottom-[50px] right-0 hidden md:block' />
        </div>
    )
}

export default Hero