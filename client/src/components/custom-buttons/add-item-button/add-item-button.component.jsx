import React from 'react';
import './add-item-button.scss';

const AddItemButton = ({ label, name, handleOnClick, addItem }) => (
    <div onClick={e => handleOnClick(e, addItem)}>
        <button className={`${addItem ? 'remove-item-button' : 'add-item-button'}`} >
           {addItem ? '-' : '+'} 
        </button> {label && !addItem && <span className={`${name} add-item-label`} >{label}</span>}
    </div>
);

export default AddItemButton;