import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import './homepage.scss';
import ContactDisplayBar from '../../components/contact-display-bar/contact-display-bar.component';
import ContactInfoDisplay from '../../components/contact-info-display/contact-info-display.component';
import { getAllContacts } from '../../redux/actions/creators/creators';
import { useDispatch, useSelector } from 'react-redux';
import { updateAppInfo } from '../../redux/selectors/selectors';

const HomePage = memo(() => {
    const dispatch = useDispatch();
    const updateApp = useSelector(updateAppInfo)

    const [contacts, setContacts] = useState({ contactsInfo: [] });
    const { contactsInfo } = contacts;

    useEffect(() => {
        axios.get('http://localhost:5000/contacts/paginated')
            .then(resp => {
                setContacts(prevState => ({
                    ...prevState,
                    contactsInfo: resp.data
                }));
            })
    }, [updateApp]);

    (() => dispatch(getAllContacts(contactsInfo)))();

    return (
        <div className='homepage'>
            <ContactDisplayBar contacts={contactsInfo} />
            <ContactInfoDisplay />
        </div>
    );
});

export default HomePage;