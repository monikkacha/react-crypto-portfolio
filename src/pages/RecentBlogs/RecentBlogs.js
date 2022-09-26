import React from 'react'
import recent_blog_1 from '../../data/images/recent_blog_1.png'
import recent_blog_2 from '../../data/images/recent_blog_2.png'
import recent_blog_3 from '../../data/images/recent_blog_3.png'
import recent_blog_4 from '../../data/images/recent_blog_4.png'
import { BsArrowRight } from 'react-icons/bs'

const RecentBlogs = () => {
    return (
        <div className='m-20 w-[80%] mx-auto'>
            <p className='font-bold text-5xl'>
                Recent Blogs
            </p>

            {/* best practice first card  */}
            <div className='bg-white flex justify-between mt-16'>
                <div className='flex flex-col p-10 justify-between'>
                    <div className='flex flex-col'>
                        <p className='uppercase font-semibold'>
                            Best Practices
                        </p>
                        <p className='font-bold text-3xl mt-4'>
                            In design active temper be uneasy. <br />
                            Thirty for remove plenty regard.
                        </p>
                    </div>
                    <p className='flex items-center gap-2 cursor-pointer'>
                        Read More
                        <span> <BsArrowRight size={16} /> </span>
                    </p>
                </div>
                <img src={recent_blog_1} className='cursor-pointer' />
            </div>

            {/* Other Best Practice Cards */}
            <div className='mt-8 flex justify-between gap-8'>
                {/* first card  */}
                <div className='bg-white flex flex-col justify-between flex-1'>
                    <div className='p-10'>
                        <div className='flex flex-col'>
                            <p className='uppercase font-semibold'>
                                Best Practices
                            </p>
                            <p className='font-bold text-3xl mt-4'>
                                Partiality on or <br />
                                continuing particular <br />
                                principles as.
                            </p>

                        </div>
                    </div>
                    <img src={recent_blog_2} className='cursor-pointer' />
                </div>

                {/* second card  */}
                <div className='bg-white flex flex-col justify-between flex-1'>
                    <div className='p-10'>
                        <div className='flex flex-col'>
                            <p className='uppercase font-semibold'>
                                Best Practices
                            </p>
                            <p className='font-bold text-3xl mt-4'>
                                Village did removed  <br />
                                enjoyed explain
                            </p>

                        </div>
                    </div>
                    <img src={recent_blog_3} className='cursor-pointer' />
                </div>


                {/* third card  */}
                <div className='bg-white flex flex-col justify-between flex-1'>
                    <div className='p-10'>
                        <div className='flex flex-col'>
                            <p className='uppercase font-semibold'>
                                Best Practices
                            </p>
                            <p className='font-bold text-3xl mt-4'>
                                Wise busy past both <br />
                                park when an ye no. <br />
                                Nay likely her length.
                            </p>

                        </div>
                    </div>
                    <img src={recent_blog_4} className='cursor-pointer ' />
                </div>

            </div>

        </div>
    )
}

export default RecentBlogs