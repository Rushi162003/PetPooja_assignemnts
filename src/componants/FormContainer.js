import React, { useState } from 'react'
import FormInput from './_componants/FormInput'
import FromTextArea from './_componants/FromTextArea'
import SelectInput from './_componants/SelectInput'
import FromCheckbox from './_componants/FromCheckbox'
import FormRadio from './_componants/FormRadio'
import Button from './_componants/Button'
import "../style/form.css"
const FormContainer = () => {
    let [formField, setFormfield] = useState({
        Name: "",
        Address: "",
        checkboxes: {},
        Gender: "",
        Role: "",
        Date: "",
    })
    function handleSubmit(e) {
        e.preventDefault()
        if (formField.Name == "" || typeof formField.Name !== "string") {
            alert("Please Enter name field properly")
        }
        else if (formField.Address == "") {
            alert("Please Enter address field properly")
        }
        else if (formField.checkboxes == "") {
            alert("Please Enter checkboxe field properly")
        }
        else if (formField.Gender == "") {
            alert("Please Enter gender field properly")
        }
        else if (formField.Role == "") {
            alert("Please Enter role field properly")
        }
        else {
            alert("form submitted succesfully")
            console.log(formField)
        }
    }

    function inputChange(e) {
        // let { name, value } = e.target
        // setFormfield({ ...formField, [name]: value })

        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormfield((prev) => ({
                ...prev,
                checkboxes: {
                    ...prev.checkboxes,
                    [name]: checked, // Update checkbox state
                },
            }));
        }
        else {
            setFormfield((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }


    return (
        <>
            <div className="inputForm">
                <form action="">
                    <FormInput inputChange={inputChange} label="Name" type="text" />
                    <FromTextArea inputChange={inputChange} label="Address" type="text" />
                    <SelectInput inputChange={inputChange} label="Gender" />
                    <FromCheckbox inputChange={inputChange} label="Chekcbox" type="checkbox" />
                    <FormRadio inputChange={inputChange} label="Role" type="radio" />
                    <FormInput inputChange={inputChange} label="Date" type="date" />
                    <Button handleSubmit={handleSubmit} />
                </form>

            </div>
        </>
    )
}

export default FormContainer
