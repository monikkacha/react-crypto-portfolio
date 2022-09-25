import React from 'react'

const StepCircle = ({ number }) => {
    return (
        <div className='h-24 w-24 bg-blue-900 rounded-full flex items-center justify-center'>
            <p className='text-white text-5xl font-semibold'>{number}</p>
        </div>
    )
}

export default StepCircle