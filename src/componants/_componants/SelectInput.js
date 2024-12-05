
import React from 'react'

const SelectInput = ({ label, inputChange }) => {
  return (
    <div>
      <label htmlFor="name">{label} </label>
      <select onChange={inputChange} name={label} id="">
        <option value="">{label}</option>
        <option value="male">male</option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}

export default SelectInput
