import React from 'react';
import {
  PhoneBookInputContainer,
  PhoneBookContactList,
} from './ContactBook.Styled';

import { ContactListItem } from './ContactListItem';

export class ContactList extends React.Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredData = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <PhoneBookInputContainer>
        ContactList
        <PhoneBookContactList>
          {filteredData.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </PhoneBookContactList>
        ;
      </PhoneBookInputContainer>
    );
  }
}
