import React from "react";


const FormBtn = ({ type = "default", className, children, onClick }) => ( 
    <button onClick = { this.handleFormSubmit }
    className = {
        ["btn btn-success", `btn-${type}`, className].join(" ")
    } > Search { children } 
    </button>
);

export default FormBtn;