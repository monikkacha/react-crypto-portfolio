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
        </div>
    )
}

export default EditionalInfo