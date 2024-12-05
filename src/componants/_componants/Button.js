import React from 'react'

const Button = ({ handleSubmit }) => {
    return (
        <div className='formInput'>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Button
