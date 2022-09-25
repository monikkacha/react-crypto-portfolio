import React from 'react'
import feature1 from '../../data/images/feature1.png'
import feature2 from '../../data/images/feature2.png'

const Feature = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className='flex'>
                <div className='flex-1'>
                    <img src={feature1} />
                </div>
                <div className='flex-1 flex flex-col pt-16'>
                    <p className='uppercase font-semibold text-purple-800'>Our Feature</p>
                    <p className='text-5xl font-semibold mt-4'>
                        All of your portfolios are <br />
                        linked to your AR Shakir <br />
                        account
                    </p>
                    <p className='mt-6 font-light text-gray-500'>
                        Why kept very ever home mrs. Considered sympathize ten <br />
                        uncommonly occasional assistance sufficient not. Letter of <br />
                        on become he tended active enable to.
                    </p>
                    <button className='bg-blue-900 px-6 py-3 rounded-lg font-light cursor-pointer text-white w-[160px] mt-8'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='flex'>
                <div className='flex-1 flex flex-col pt-16'>
                    <p className='uppercase font-semibold text-purple-800'>Our Feature</p>
                    <p className='text-5xl font-semibold mt-4'>
                        All payments can be<br />
                        managed from one<br />
                        account
                    </p>
                    <p className='mt-6 font-light text-gray-500'>
                        Why kept very ever home mrs. Considered sympathize ten <br />
                        uncommonly occasional assistance sufficient not. Letter of <br />
                        on become he tended active enable to.
                    </p>
                    <button className='bg-blue-900 px-6 py-3 rounded-lg font-light cursor-pointer text-white w-[160px] mt-8'>
                        Get Started
                    </button>
                </div>
                <div className='flex-1'>
                    <img src={feature2} />
                </div>
            </div>
        </div>
    )
}

export default Feature