import React, { useEffect, useState, memo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { getAllContacts } from '../../redux/actions/creators/creators';
// import { allContacts } from '../../redux/selectors/selectors';
import './homepage.scss';
import ContactDisplayBar from '../../components/contact-display-bar/contact-display-bar.component';
import ContactInfoDisplay from '../../components/contact-info-display/contact-info-display.component';

const HomePage = memo(() => {
    // const dispatch = useDispatch();
    const [contacts, setContacts] = useState({ contactsInfo: [] });
    console.log('HomePage just rendered!')

    useEffect(() => {
        axios.get('http://localhost:5000/contacts/paginated')
            .then(resp => {
                setContacts(prevState => ({
                    ...prevState,
                    contactsInfo: resp.data
                }));
            })
    }, []);

    // const contacts = useSelector(allContacts);
    const { contactsInfo } = contacts;
    const emails = contactsInfo.reduce((acc, currentItem) => {
        const emailObject = {
            email: currentItem.emails[0],
            id: currentItem._id
        };

        acc.push(emailObject);
        
        return acc;
    }, []);

    return (
        <div className='homepage'>
            <ContactDisplayBar contacts={contactsInfo} />
            <ContactInfoDisplay emails={emails}/>
        </div>
    );
});

export default HomePage;