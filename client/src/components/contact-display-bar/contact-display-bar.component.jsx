import React, { useState } from 'react';
import './contact-display-bar.scss';
import ContactItem from '../contact-item/contact-item.component';
import { mockData } from '../../mockData/mockData';

const ContactDisplayBar = () => {
    const [contacts, setContacts] = useState({ currentContact: '', contacts: mockData })
    const handleOnClick = id => {
        console.log(id);
    };
   
    return (
        <div className='contact-display-bar' >
            <h1 className='heading'>Contacts</h1>
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