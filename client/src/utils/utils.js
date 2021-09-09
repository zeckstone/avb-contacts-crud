export const contactEmailList = (contactEmails) => {
    return contactEmails.map((email, idx) => ({
        email,
        id: idx
    }))
};

export const contactInfoValidator = (firstName, lastName, email) => {
    const emailTest = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const firstNameTest = /([A-Za-z]){2,30}/i;
    const lastNameTest = /[A-Za-z]{2,30}/i;
    let isValidInput;

    if (emailTest.test(email) && firstNameTest.test(firstName) && lastNameTest.test(lastName)) {
        isValidInput = true;
    } else {
        isValidInput = false;
    }

    return isValidInput;
}