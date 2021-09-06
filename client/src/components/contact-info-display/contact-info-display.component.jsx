import React from 'react';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-buttons/custom-button.component';
import EmailListComponent from '../email-list-component/email-list.component';
import { mockData } from '../../mockData/mockData';

let mockEmails = [];
let count = 1;
mockData[0].emails.forEach(element => {
    mockEmails.push({
        email: element,
        id: count
    });

    count ++;
});

const ContactInfoDisplay = () => (
    <div className='contact-info-display'>
        <div className='full-name-container' >
            <CustomInput isVisible={true} label='First Name' customClass='first-name'/>
            <CustomInput isVisible={true} label='Last Name' customClass='last-name'/>
            <EmailListComponent emails={mockEmails}/>
            <CustomButton label='Delete' />
            <CustomButton label='Cancel' />
            <CustomButton label='Save' />
        </div>
    </div>
);

export default ContactInfoDisplay;