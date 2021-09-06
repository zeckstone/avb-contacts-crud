import React from 'react';
import './homepage.scss';
import ContactDisplayBar from '../../components/contact-display-bar/contact-display-bar.component';
import ContactInfoDisplay from '../../components/contact-info-display/contact-info-display.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <ContactDisplayBar />
            <ContactInfoDisplay />
        </div>
    );
};

export default HomePage;