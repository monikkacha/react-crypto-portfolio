import React from 'react'
import StepCircle from '../../components/StepCircle'
import process from '../../data/images/process.png'

const Process = () => {
    return (
        <div className='py-36 bg-blue-800'>
            <div className='w-[80%] mx-auto'>
                {/* heading  */}
                <div className='flex justify-between items-center'>
                    <p className='text-white text-5xl font-bold'>
                        Yet preference connection unpleasant <br />
                        yet melancholy but end appearance
                    </p>
                    <div>
                        <button className='bg-orange-500 px-8 py-4 rounded-lg cursor-pointer text-white'>
                            Get Started Now
                        </button>
                    </div>
                </div>
                {/* content  */}
                <div className='flex mt-6'>
                    <div className='flex-1 mt-6 pl-20'>
                        <div className='flex flex-col gap-10'>
                            {/* steps  */}
                            <div className='flex text-white gap-8'>
                                <StepCircle number={1} />
                                <div className='flex flex-col'>
                                    <p className='text-2xl font-semibold'>
                                        First Working Process
                                    </p>
                                    <p className='font-light mt-3 text-lg'>
                                        Blessing it ladyship on sensible  <br />
                                        judgment settling outweigh.
                                    </p>
                                </div>
                            </div>

                            <div className='flex text-white gap-8'>
                                <StepCircle number={2} />
                                <div className='flex flex-col'>
                                    <p className='text-2xl font-semibold'>
                                        Dedicated Team
                                    </p>
                                    <p className='font-light mt-3 text-lg'>
                                        Warmly little before cousin sussex<br />
                                        entire men set.
                                    </p>
                                </div>
                            </div>

                            <div className='flex text-white gap-8'>
                                <StepCircle number={3} />
                                <div className='flex flex-col'>
                                    <p className='text-2xl font-semibold'>
                                        24/7 Hours Support
                                    </p>
                                    <p className='font-light mt-3 text-lg'>
                                        And excellence partiality estimating<br />
                                        terminated day everything.
                                    </p>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src={process} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process