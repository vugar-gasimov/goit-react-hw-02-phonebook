import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PhoneBookContainer,
  PhoneBookTitle,
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
  PhoneBookButton,
  PhoneBookContactList,
  PhoneBookContactItem,
  PhoneBookContactTitle,
} from './ContactBook.Styled';
import { Filter } from './Filter';

export class ContactBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Vugar Gasimov', number: '684-02-29' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    filter: '',
    name: '',
    number: '',
    isNameValid: false,
    isNumberValid: false,
  };
  handleNewContacts = () => {
    if (this.state.isNameValid && this.state.isNumberValid) {
      const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };
  handleNewName = e => {
    const name = e.target.value.trim();
    const isNameValid =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);
    this.setState({
      name,
      isNameValid,
    });
  };
  handleNewNumber = e => {
    const number = e.target.value.trim();
    const isNumberValid =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        number
      );
    this.setState({
      number,
      isNumberValid,
    });
  };
  handleFilterInput = e => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };
  getFilteredData = () => {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const { name, number, isNameValid, isNumberValid, filter } = this.state;
    const filteredData = this.getFilteredData();
    return (
      <PhoneBookContainer>
        <PhoneBookTitle>PhoneBook</PhoneBookTitle>
        <PhoneBookInputContainer>
          <PhoneBookInputLabel>Name: </PhoneBookInputLabel>
          <PhoneBookInput
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            placeholder="Add new name..."
            onChange={this.handleNewName}
          />
          <PhoneBookInputLabel>Number: </PhoneBookInputLabel>
          <PhoneBookInput
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            placeholder="Add new number..."
            onChange={this.handleNewNumber}
          />
          <PhoneBookButton
            onClick={this.handleNewContacts}
            disabled={!isNameValid || !isNumberValid}
          >
            Add contact
          </PhoneBookButton>
        </PhoneBookInputContainer>
        <PhoneBookContactTitle>Contacts</PhoneBookContactTitle>
        <PhoneBookInputLabel>Find contacts by name: </PhoneBookInputLabel>
        <Filter filter={filter} setFilter={this.handleFilterInput} />
        <PhoneBookContactList>
          {filteredData.map(contact => (
            <PhoneBookContactItem key={contact.id}>
              {contact.name}: {contact.number}
            </PhoneBookContactItem>
          ))}
        </PhoneBookContactList>
      </PhoneBookContainer>
    );
  }
}
ContactBook.propTypes = {
  message: PropTypes.string,
};
