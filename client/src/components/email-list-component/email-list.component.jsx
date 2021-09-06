import React from 'react';
import './email-list-component.scss';
import DeleteIcon from '../custom-buttons/delete-icon/delete-icon.component';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';
import CustomInput from '../custom-input/custom-input.component';

const EmailListComponent = ({ emails }) => {
    return (
        <div>
            <label className='email-label'>Email</label>
            <div className='email-container'>
                {
                    emails.map(elem => 
                        <div key={elem.id} className='email'>
                            {elem.email} <DeleteIcon key={elem.id} /> <br /><br />
                        </div>
                    )
                }
                <AddItemButton label='add email' />
                <CustomInput />
            </div>
        </div>
    )
};

export default EmailListComponent;