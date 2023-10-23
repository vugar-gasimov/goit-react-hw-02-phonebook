import React from 'react';
import {
  PhoneBookInputContainer,
  PhoneBookContactList,
  ListItemContainer,
  DeleteButton,
} from './ContactBook.Styled';

import { ContactListItem } from './ContactListItem';
import { getFilteredData } from 'helpers/getFilteredData';

export class ContactList extends React.Component {
  handleDeleteClick = contactId => {
    this.props.onDeleteContact(contactId);
  };
  render() {
    const { contacts, filter } = this.props;
    const filteredData = getFilteredData({ contacts, filter });
    return (
      <PhoneBookInputContainer>
        Contact List
        <PhoneBookContactList>
          {filteredData.map(contact => (
            <ListItemContainer key={contact.id}>
              <ContactListItem contact={contact} />
              <DeleteButton onClick={() => this.handleDeleteClick(contact.id)}>
                Delete
              </DeleteButton>
            </ListItemContainer>
          ))}
        </PhoneBookContactList>
        ;
      </PhoneBookInputContainer>
    );
  }
}
