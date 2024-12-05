import React from 'react'

const FormRadio = ({ type, label, inputChange }) => {
  return (
    <div>
      <label htmlFor="name">{label} </label>
      <input onChange={inputChange} type={type} name={label} id={label} />Working
      <input onChange={inputChange} type={type} name={label} id={label} />Not Working
    </div>
  )
}

export default FormRadio
