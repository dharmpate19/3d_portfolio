import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className='absolute top-11 left-10 right-0 flex justify-center items-center'>
        <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800' } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`} role={'alert'}>
            <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500' } text-xs flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-white`} role={'alert'}>{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className='px-2 py-1 text-left text-white'>{text}</p>
        </div>
    </div>
  )
}

export default Alert