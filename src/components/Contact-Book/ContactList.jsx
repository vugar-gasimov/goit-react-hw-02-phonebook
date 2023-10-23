import React from 'react';
import {
  PhoneBookInputContainer,
  PhoneBookContactList,
} from './ContactBook.Styled';

import { ContactListItem } from './ContactListItem';
import { getFilteredData } from 'helpers/getFilteredData';

export class ContactList extends React.Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredData = getFilteredData({ contacts, filter });
    return (
      <PhoneBookInputContainer>
        Contact List
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
