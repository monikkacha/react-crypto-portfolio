import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-[#1B1C31]'>
            {/* join the wait list  */}
            <div className='flex justify-center items-center p-20 flex-col'>
                <p className='text-white text-center text-5xl'>
                    Join millions of <br></br>
                    creative people with AR Shakir
                </p>
                <div className='mt-12'>
                    <button className='bg-[#F9896B] px-10 py-3 rounded-md flex items-center gap-2'>
                        Join The Waitlist <BsArrowRight />
                    </button>
                </div>
            </div>

            {/* border  */}
            <div className='border-t border-gray-700' />

            <div className='p-20 flex w-[80%] mx-auto'>
                <div className='flex-1 text-white'>
                    <h1 className='font-semibold uppercase'>AR Shakir</h1>
                    <p className='text-light mt-4 text-gray-500'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not  <br />
                        thoughts all exercise blessing. Indulgence way everything joy  <br />
                        alteration boisterous the attachment.
                    </p>
                </div>
                <div className='flex-1 flex justify-between text-white'>
                    <div>
                        <h1 className='capitalize text-lg font-semibold'>
                            company
                        </h1>
                        <ul className='mt-6'>
                            <li className='font-light mt-3 capitalize'>about us</li>
                            <li className='font-light mt-3 capitalize'>carrer</li>
                            <li className='font-light mt-3 capitalize'>blog</li>
                            <li className='font-light mt-3 capitalize'>pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='capitalize text-lg font-semibold'>
                            product
                        </h1>
                        <ul className='mt-6'>
                            <li className='font-light mt-3 capitalize'>Invoicing Platform</li>
                            <li className='font-light mt-3 capitalize'>Accounting Plateform</li>
                            <li className='font-light mt-3 capitalize'>Create Proposal</li>
                            <li className='font-light mt-3 capitalize'>Contracts</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='capitalize text-lg font-semibold'>
                            Resources
                        </h1>
                        <ul className='mt-6'>
                            <li className='font-light mt-3 capitalize'>Proposal Template</li>
                            <li className='font-light mt-3 capitalize'>Invoice Template</li>
                            <li className='font-light mt-3 capitalize'>Tuturoial</li>
                            <li className='font-light mt-3 capitalize'>How to write a contract</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-700' />

            <div className='p-12 font-light'>
                <div className='w-[80%] mx-auto text-white flex justify-between'>
                    <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                    <p>Supported by Microsoft Startup</p>
                </div>
            </div>

        </div>
    )
}

export default Footer