import React, { memo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './email-list-component.scss';
import DeleteIcon from '../custom-buttons/delete-icon/delete-icon.component';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';
import CustomInput from '../custom-input/custom-input.component';
import { contactEmailList } from '../../utils/utils';
import { setEmail, toggleEmailInput, getInitialState, updateAppContacts } from '../../redux/actions/creators/creators';
import { isSelectedContact, selectContact, selectEmailInputToggle, selectNewEmail } from '../../redux/selectors/selectors';

const EmailListComponent = memo(({ emails }) => {
    const dispatch = useDispatch();
    const emailObject = emails && contactEmailList(emails);
    const newEmail = useSelector(selectNewEmail);
    const showInput = useSelector(selectEmailInputToggle);
    const selectedContactObj = useSelector(selectContact);
    const isSelected = useSelector(isSelectedContact);


    const handleEmailInput = (e) => {
        e.preventDefault();

        dispatch(setEmail(e.target.value));
    }

    const handleAddItemButtonClick = (e, toggle) => {
        e.preventDefault();

        dispatch(toggleEmailInput());
    }

    const deleteEmail = async (e, email) => {
        e.preventDefault();

        if (isSelected) {
          const deleteObject = {
                type: 'DELETE_EMAIL',
                email: email,
                id: selectedContactObj._id
            };
          
          await  axios.put(`http://localhost:5000/contacts/${selectedContactObj._id}`, deleteObject)
                .then(resp => {
                    resp.data.acknowledged && alert('Email Deleted!');
                });
        } else {
            alert('Nothing to Delete!');

            return;
        }

        dispatch(getInitialState());
        dispatch(updateAppContacts());
    };

    return (
        <div>
            <label className='email-label'>Email</label>
            <div className='email-container'>
                { emailObject && 
                    (<div>
                        {
                            emailObject.map(item => 
                                <div key={item.id} className='email'>
                                    {item.email} <DeleteIcon item={item.email} handleOnclick={deleteEmail} key={item.email} /> <br /><br />
                                </div>
                            )
                        }
                    </div>) 
                }
                <AddItemButton 
                    handleOnClick={handleAddItemButtonClick} 
                    label='add email' 
                    name='add-email-button'
                    addItem={showInput}
                /> <br />
                <CustomInput
                    isVisible={showInput}
                    customClass='email' 
                    name={newEmail} 
                    handleChange={handleEmailInput}
                />
            </div>
        </div>
    )
});

export default EmailListComponent;