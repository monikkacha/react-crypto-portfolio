import React from 'react'
import editional_info_1 from '../../data/images/editional_info_1.png'
import editional_info_2 from '../../data/images/editional_info_2.png'
import editional_info_3 from '../../data/images/editional_info_3.png'

const EditionalInfo = () => {
    return (
        <div className='my-20'>
            {/* card  */}
            <div className='w-[80%] mx-auto bg-white p-10 rounded-lg border-2 '>
                <div className='flex gap-10'>
                    <div className='text-2xl font-bold w-[300px]'>
                        Germany-basedf <br />
                        & GDPR Compliant
                    </div>
                    <div className='w-full flex justify-around'>

                        <div className='flex items-center gap-6'>
                            <div className='bg-gray-200 p-4 rounded-md'>
                                <img src={editional_info_1} />
                            </div>
                            <p className='text-gray-600 text-lg'>
                                Data does not  <br />
                                leave our servers
                            </p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <div className='bg-gray-200 p-4 rounded-md'>
                                <img src={editional_info_2} />
                            </div>
                            <p className='text-gray-600 text-lg'>
                                Own <br />
                                infrastructure
                            </p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <div className='bg-gray-200 p-4 rounded-md'>
                                <img src={editional_info_3} />
                            </div>
                            <p className='text-gray-600 text-lg'>
                                Most renowed  <br />
                                data centers
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* two cards */}
            <div className='w-[80%] mx-auto mt-16 rounded-2xl flex gap-6'>
                <div className='flex-1 bg-white p-12 flex flex-col items-center justify-center rounded-xl shadow-lg '>
                    <h1 className='font-bold text-3xl text-center'>
                        Outward clothes <br />
                        promise at gravity.
                    </h1>
                    <p className='mt-6 font-light text-center text-gray-600'>
                        End-to-end payments and financial management in a single <br />
                        solution. Meet the right platform to help realize.
                    </p>
                    <div className='mt-6'>
                        <button className='bg-blue-800 text-white px-6 py-4 rounded-lg'>
                            Read More
                        </button>
                    </div>
                </div>
                <div className='flex-1 bg-white p-12 flex flex-col items-center justify-center rounded-xl shadow-lg'>
                    <h1 className='font-bold text-3xl text-center'>
                        Outward clothes <br />
                        promise at gravity.
                    </h1>
                    <p className='mt-6 font-light text-center text-gray-600'>
                        End-to-end payments and financial management in a single <br />
                        solution. Meet the right platform to help realize.
                    </p>
                    <div className='mt-6'>
                        <button className='bg-blue-800 text-white px-6 py-4 rounded-lg cursor-pointer'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditionalInfo