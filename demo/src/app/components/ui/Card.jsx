import React from 'react'

const Card = ({className='', data}) => {
  return (
    <>
        <div className={`border rounded-md p-4 text-center ${className}`}>{data}</div>
    </>
  )
}

export default Card