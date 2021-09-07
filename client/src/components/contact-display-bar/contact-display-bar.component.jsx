import React, { memo } from 'react';
import './contact-display-bar.scss';
import ContactItem from '../contact-item/contact-item.component';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';

const ContactDisplayBar = memo(({ contacts }) => {
    const handleOnClick = id => {
        console.log(id);
    };
   
    return (
        <div className='contact-display-bar' >
            <div className='heading'>Contacts <AddItemButton name='contacts-add-item' /></div>
            <div className='contact-display-container'>
                {
                    contacts.map(contact => 
                        <ContactItem 
                            key={contact._id} 
                            contact={contact}
                            handleOnClick={handleOnClick} 
                        />
                    )
                }
            </div>
        </div>
    );
});

export default ContactDisplayBar;