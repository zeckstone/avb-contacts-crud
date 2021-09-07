import React, { memo } from 'react';

const ContactItem = memo(({ contact, handleOnClick }) => (
    <div className='contact-item-container'>
        <div className='contact-item' onClick={handleOnClick} >
            {
                `${contact.firstName} ${contact.lastName}`
            }
        </div>
    </div>
));

export default ContactItem;