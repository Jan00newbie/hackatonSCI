import React from 'react';
import ContactItem from './ContactItem';

const styles = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const ContactList = ({items}) =>
    (<div style={styles}>
        {items.map(contact =>
            <ContactItem 
                key={contact.id}
                contact={contact}/>    
        )}
    </div>)

export default ContactList;
