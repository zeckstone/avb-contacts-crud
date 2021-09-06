import React from 'react';

const ContactItem = ({ contact, handleOnClick }) => (
    <div className='contact-item' onClick={() => handleOnClick(contact._id)} >
        {
            `${contact.firstName} ${contact.lastName}`
        }
    </div>
);

export default ContactItem;