import React from 'react'

const FromCheckbox = ({ type, label, inputChange }) => {
    return (
        <div>
            <label htmlFor="name">{label} </label>
            <input
                onChange={inputChange}
                type="checkbox"
                name="check1"
                // checked={formField.checkboxes.check1 || false}
            />{" "}
            Check 1
            <input
                onChange={inputChange}
                type="checkbox"
                name="check2"
                // checked={formField.checkboxes.check2 || false}
            />{" "}
            Check 2
            <input
                onChange={inputChange}
                type="checkbox"
                name="check3"
                // checked={formField.checkboxes.check3 || false}
            />{" "}
            Check 3
            
            
        </div>
    )
}

export default FromCheckbox
