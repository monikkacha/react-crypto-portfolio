import React from 'react'
import './Hero.css'
import Header from '../../components/Header.js'
import { BsPlayFill } from 'react-icons/bs'
import dashboard from '../../data/images/dashboard.png'

const Hero = () => {
    return (

        <div className='w-screen h-screen hero-main-bg relative")]'>
            <div className='hero-bg-cover absolute w-screen h-screen' />
            <div className='h-[300px] w-[300px] circle-blur rounded-full absolute top-[200px] left-0 hidden md:block' />
            <div className='h-[300px] w-[300px] circle-blur rounded-full absolute bottom-[50px] right-0 hidden md:block' />

            <div className='absolute z-10 w-screen h-screen'>
                <Header />

                <div className='flex items-center justify-center flex-col text-white'>
                    <h1 className='text-center  font-bold text-3xl md:text-7xl mt-10 md:mt-24'>
                        Managing your crypto portfolio <br />has never been easier
                    </h1>
                    <p className='text-center mt-12 font-light'>
                        End-to-end paymets and financial management in single solution. Meet <br />
                        the right platform to help realize .
                    </p>
                    {/* buttons */}
                    <div className='flex justify-between mt-16 gap-4'>
                        <div>
                            <button className='bg-orange-600 px-6 py-3 rounded-full font-light cursor-pointer'>
                                Get Started
                            </button>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-[48px] h-[48px] bg-green-500 rounded-full flex items-center justify-center cursor-pointer'>
                                <BsPlayFill size={30} />
                            </div>
                            <h1 className='font-light'>
                                See How It Works
                            </h1>
                        </div>
                    </div>
                    <img src={dashboard} className='w-[500px] mt-12 shadow-xl rounded-xl shadow-blue-100' />
                </div>
            </div>

        </div>
    )
}

export default Hero