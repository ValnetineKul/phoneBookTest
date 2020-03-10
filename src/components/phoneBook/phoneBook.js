import React from 'react';
import styles from './phoneBook.module.scss'

const PhoneBook = (props) => {
    const contacts = props.phoneBookContacts.map((contact) => (
        <tr key={contact.id}>
            <td>{contact.userFirstName}</td>
            <td>{contact.userLastName}</td>
            <td>{contact.userPhone}</td>
        </tr>
    ));
    console.log(props);
    return (
        <table className={styles.contactsTable}>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    )
};

export default PhoneBook;