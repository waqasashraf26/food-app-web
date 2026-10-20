import React from 'react'

const Heading = ({ text, style }) => {
    return (
        <div className={`font-semibold xl:text-5xl lg:text-4xl text-3xl  xl:leading-[56px] ${style}`}>
            {text}
        </div>
    )
}

export default Heading
