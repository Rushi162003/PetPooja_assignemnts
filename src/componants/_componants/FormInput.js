import React from 'react'

const FormInput = ({ type, label, inputChange }) => {
    return (
        <div className='formInput'> 
            <label htmlFor="name">{label}</label>
            <input onInput={inputChange} type={type} name={label} id={type} placeholder={"Enter your " + label} />
        </div>
    )
}

export default FormInput
