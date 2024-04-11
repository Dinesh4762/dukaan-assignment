import React from 'react'

const MainDiv = ({children}) => {
  return (
    <div className='w-full flex flex-col bg-main relative gap-5'>
      {children}
    </div>
  )
}

export default MainDiv