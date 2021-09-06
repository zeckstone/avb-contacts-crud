import React from 'react';

const CustomInput = ({ label, name }) => (
    <div>
        <label>{label}</label>
        <input value={name} className={`${label.toLowerCase()}-input custom-input`} />
    </div>
);

export default CustomInput;