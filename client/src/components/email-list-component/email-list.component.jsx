import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './email-list-component.scss';
import DeleteIcon from '../custom-buttons/delete-icon/delete-icon.component';
import AddItemButton from '../custom-buttons/add-item-button/add-item-button.component';
import CustomInput from '../custom-input/custom-input.component';
import { contactEmailList } from '../../utils/utils';
import { setEmail, toggleEmailInput } from '../../redux/actions/creators/creators';
import { selectEmailInputToggle, selectNewEmail } from '../../redux/selectors/selectors';

const EmailListComponent = memo(({ emails }) => {
    const dispatch = useDispatch();
    const emailObject = emails && contactEmailList(emails);
    const newEmail = useSelector(selectNewEmail);
    const showInput = useSelector(selectEmailInputToggle);

    const handleEmailInput = (e) => {
        e.preventDefault();

        dispatch(setEmail(e.target.value));
    }

    const handleAddItemButtonClick = (e, toggle) => {
        e.preventDefault();

        dispatch(toggleEmailInput());
    }

    return (
        <div>
            <label className='email-label'>Email</label>
            <div className='email-container'>
                { emailObject && 
                    (<div>
                        {
                            emailObject.map(item => 
                                <div key={item.id} className='email'>
                                    {item.email} <DeleteIcon key={item.id} /> <br /><br />
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