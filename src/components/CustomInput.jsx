import React from 'react'

const CustomInput = ({
  type = 'text', 
  placeholder = '',
  onchanged, 
  className
}) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onchanged}
        className={`rounded-md pl-3 w-full text-iron text-[15px] h-[48px] border
          focus:border-primary focus:bg-transparent duration-300 ${className}`} />
  )
}

export default CustomInput