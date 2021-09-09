import React from 'react';
import './add-item-button.scss';

const AddItemButton = ({ label, name, handleOnClick, addItem }) => (
    <div>
        <button className={`${addItem ? 'remove-item-button' : 'add-item-button'}`} onClick={e => handleOnClick(e, addItem)}>
           {addItem ? '-' : '+'} 
        </button> {label && <span className={`${name} add-item-label`} >{label}</span>}
    </div>
);

export default AddItemButton;