import React from 'react';
import './add-item-button.scss';

const AddItemButton = ({ label, name, handleOnClick }) => (
    <div>
        <button className='add-item-button' onClick={() => handleOnClick}>
            +
        </button> {label && <span className={`${name} add-item-label`} >{label}</span>}
    </div>
);

export default AddItemButton;