import React from 'react';
import { PhoneBookContactItem } from './ContactBook.Styled';

export function ContactListItem({ contact }) {
  return (
    <PhoneBookContactItem>
      {contact.name}: {contact.number}
    </PhoneBookContactItem>
  );
}
