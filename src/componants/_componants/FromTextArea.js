import React from 'react'

const FromTextArea = ({ type, label, inputChange }) => {
    return (
        <div>
            <label htmlFor="name">{label}</label>
            <textarea onInput={inputChange} name={label} cols={25} rows={5} type={type} id={type} placeholder={"Enter your " + label}></textarea>
        </div>
    )
}

export default FromTextArea
