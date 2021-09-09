import React from 'react';
import './delete-icon.scss';

const DeleteIcon = ({ handleOnclick, item }) => (
            <button 
                className='delete-icon'
                onClick={e => handleOnclick(e, item)}
            >
                -
            </button>
);

export default DeleteIcon;