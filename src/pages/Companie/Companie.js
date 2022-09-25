import React from 'react'
import openzeppelin from '../../data/images/openzeppelin.png'
import oracle from '../../data/images/oracle.png'
import morpheus from '../../data/images/morpheus.png'
import samsung from '../../data/images/samsung.png'
import monday from '../../data/images/monday.png'
import segment from '../../data/images/segment.png'
import protonet from '../../data/images/protonet.png'

const Companie = () => {
    return (
        <div className='my-[160px] flex items-center justify-center flex-col text-2xl'>
            <p>
                Over 32k+ software  businesses growing with AR Shakir.
            </p>
            <div className='flex justify-center gap-12 mt-12'>
                <img src={openzeppelin} className='w-28 h-6' />
                <img src={oracle} className='w-28' />
                <img src={morpheus} className='w-28' />
                <img src={samsung} className='w-28' />
                <img src={monday} className='w-28' />
                <img src={segment} className='w-28' />
                <img src={protonet} className='w-28' />
            </div>
        </div>
    )
}

export default Companie