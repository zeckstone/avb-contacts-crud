import React, { memo } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { hasNewEmail, selectFirstName, selectlastName, selectContactEmails, isSelectedContact, selectNewEmail, selectContact } from '../../redux/selectors/selectors';
import { getInitialState, resetForm, setFirstName, setLastName, updateAppContacts } from '../../redux/actions/creators/creators';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-buttons/custom-button.component';
import EmailListComponent from '../email-list-component/email-list.component';
import { contactInfoValidator, firstAndLastNamesValidator } from '../../utils/utils';

const ContactInfoDisplay =  memo(() => {
    const dispatch = useDispatch();
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectlastName);
    const emails = useSelector(selectContactEmails);
    const isSelected = useSelector(isSelectedContact);
    const newEmail = useSelector(selectNewEmail);
    const selectedContactObj = useSelector(selectContact);
    const _hasNewEmail = useSelector(hasNewEmail);

    const handleFirstNameInput = (e) => {
        e.preventDefault();

        dispatch(setFirstName(e.target.value));
    }

    const handlelastNameInput = (e) => {
        e.preventDefault();

        dispatch(setLastName(e.target.value));
    }

    const cancelNewContact = e => {
        e.preventDefault();

        dispatch(resetForm());
    };

    const createOrUpdateNewContact = async e => {
        e.preventDefault();

        let emailsToUse;

        if (_hasNewEmail) {
            if (!contactInfoValidator(firstName, lastName, newEmail)) {
                alert('Ensure name fields are two or more characters long and email address is valid!');

                return;
            }
        }

        if (isSelected) {
            if (emails && Array.isArray(emails) && newEmail && (emails.indexOf(newEmail) === -1)) {
                emailsToUse = [...emails, newEmail];
            } else if (Array.isArray(emails) && emails && !newEmail) {
                emailsToUse = emails;
            } else {
                emailsToUse = [newEmail];
            }

            const updateObject = {
                type: 'UPDATE_CONTACT',
                id: selectedContactObj._id,
                firstName,
                lastName,
                emails: emailsToUse
            }

          await axios.put(`${process.env.REACT_APP_BASEURL}${selectedContactObj._id}`, updateObject)
                .then(resp => {
                    console.log(resp.data);
                    resp.data.response.acknowledged && alert('Contact Updated!');
                });

        } else {
            if (!firstAndLastNamesValidator(firstName, lastName)) {
                alert('Ensure name fields are two or more characters long!');

                return;
            }

            const _firstInitial = firstName[0].toUpperCase();
            const _firstSlice = firstName.slice(1);
            const _lastInitial = lastName[0].toUpperCase();
            const _lastSlice = lastName.slice(1);

           await axios.post(`${process.env.REACT_APP_BASEURL}`, {
                type: 'CREATE_CONTACT',
                firstName: `${_firstInitial.trim()}${_firstSlice.trim()}`,
                lastName: `${_lastInitial.trim()}${_lastSlice.trim()}`,
                emails: newEmail && [newEmail]
            })
            .then(resp => {
                resp.data.acknowledged && alert('Contact Added!');
            });
        }

        dispatch(getInitialState());
        dispatch(updateAppContacts());
    };

    const deleteContact = async e => {
        e.preventDefault();

        if (isSelected) {
          await  axios.delete(`${process.env.REACT_APP_BASEURL}${selectedContactObj._id}`)
                .then(resp => {
                    resp.data.acknowledged && alert('Contact Deleted!');
                });
        } else {
            alert('Nothing to Delete!');

            return;
        }

        dispatch(getInitialState());
        dispatch(updateAppContacts());
    };

    return (
        <div className='contact-info-display'>
            <div className='full-name-container' >
                <CustomInput name={firstName} handleChange={handleFirstNameInput} isVisible={true} label='First Name' customClass='first-name'/>
                <CustomInput name={lastName} handleChange={handlelastNameInput} isVisible={true} label='Last Name' customClass='last-name'/>
                <EmailListComponent emails={emails} />
                <CustomButton onClick={deleteContact} label='Delete' />
                <CustomButton onClick={cancelNewContact} label='Cancel' />
                <CustomButton onClick={createOrUpdateNewContact} label='Save' />
            </div>
        </div>
    );
});

export default ContactInfoDisplay;