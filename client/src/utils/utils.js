export const contactEmailList = (contactEmails) => {
    return contactEmails.map((email, idx) => ({
        email,
        id: idx
    }))
};