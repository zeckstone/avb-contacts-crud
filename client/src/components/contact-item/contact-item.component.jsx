import React, { memo } from 'react';

const ContactItem = memo(({ contact, handleOnClick }) => (
    <div className='contact-item-container' onClick={e => handleOnClick(e, contact._id)} >
        <div className='contact-item' >
            {
                `${contact.firstName} ${contact.lastName}`
            }
        </div>
    </div>
));

export default ContactItem;