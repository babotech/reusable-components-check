import React from 'react'


const Input = ({
  className,
  id,
  onChange,
  type,
  value
}) =>
  <input
    className={className}
    onChange={onChange}
    type={type}
    value={value}
  />


export default Input
