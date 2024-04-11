import React from 'react'

const MainDiv = ({children}) => {
  return (
    <div className='w-full min-w-[380px] flex flex-col bg-main relative gap-5'>
      {children}
    </div>
  )
}

export default MainDiv