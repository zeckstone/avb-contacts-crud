import React, { memo } from 'react';
import './email-list-component.scss';
import DeleteIcon from '../custom-buttons/delete-icon/delete-icon.component';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';
import CustomInput from '../custom-input/custom-input.component';

const EmailListComponent = memo(({ emails }) => {
    return (
        <div>
            <label className='email-label'>Email</label>
            <div className='email-container'>
                {
                    emails.map(item => 
                        <div key={item.id} className='email'>
                            {item.email} <DeleteIcon key={item.id} /> <br /><br />
                        </div>
                    )
                }
                <AddItemButton label='add email' />
                <CustomInput />
            </div>
        </div>
    )
});

export default EmailListComponent;