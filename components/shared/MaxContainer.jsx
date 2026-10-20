import React from 'react'

const MaxContainer = ({ children,styleClass }) => {
    return (
        <div className={`${styleClass} w-full flex justify-center items-center `} >
            <div className='max-w-[1600px] w-full flex justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

export default MaxContainer
