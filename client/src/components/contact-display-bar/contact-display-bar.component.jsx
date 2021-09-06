import React, { useState } from 'react';
import './contact-display-bar.scss';
import ContactItem from '../contact-item/contact-item.component';
import { mockData } from '../../mockData/mockData';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';

const ContactDisplayBar = () => {
    const [contacts, setContacts] = useState({ currentContact: '', contacts: mockData })
    const handleOnClick = id => {
        console.log(id);
    };
   
    return (
        <div className='contact-display-bar' >
            <div className='heading'>Contacts <AddItemButton name='contacts-add-item' /></div>
            <div className='contact-display-container'>
                {
                    contacts.contacts.map(contact => 
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
}

export default ContactDisplayBar;