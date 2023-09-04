import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="rounded-[15px] max-w-[940px] w-[940px] h-[600px] bg-white container-shadow pt-[14px] pl-[16px] pb-[18px] pr-[100px]">
        {children}
    </div>
  )
}

export default Container