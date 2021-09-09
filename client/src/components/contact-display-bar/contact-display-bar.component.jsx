import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { resetForm, selectContact } from '../../redux/actions/creators/creators';
import './contact-display-bar.scss';
import ContactItem from '../contact-item/contact-item.component';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';

const ContactDisplayBar = memo(({ contacts }) => {
    const dispatch = useDispatch();

    const handleOnClick = (e, id) => {
        e.preventDefault()

        const selectedContactInfo = contacts.find(contact => contact._id === id);

        dispatch(selectContact(selectedContactInfo));
    };

    const addNewContactClick = e => {
        e.preventDefault()

        dispatch(resetForm());
    };
   
    return (
        <div className='contact-display-bar' >
            <div className='heading'>Contacts <AddItemButton handleOnClick={addNewContactClick} name='contacts-add-item' /></div>
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