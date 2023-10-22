import React from 'react';
import { ContactForm } from './Contact-Book/ContactForm';
import { AppContainer, TitleContainer, ContentContainer } from './App.Styled';
import { Filter } from './Contact-Book/Filter';
import { ContactList } from './Contact-Book/ContactList';
import {
  PhoneBookContainer,
  PhoneBookTitle,
  PhoneBookContactTitle,
} from './Contact-Book/ContactBook.Styled';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Vugar Gasimov', number: '684-02-29' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  updateFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <AppContainer>
        <TitleContainer>React homework template</TitleContainer>

        <ContentContainer>
          <PhoneBookContainer>
            <PhoneBookTitle>PhoneBook</PhoneBookTitle>

            <ContactForm addContact={this.addContact} />

            <PhoneBookContactTitle>Contacts</PhoneBookContactTitle>

            <Filter setFilter={this.updateFilter} filter={filter} />

            <ContactList contacts={contacts} filter={filter} />
          </PhoneBookContainer>
        </ContentContainer>
      </AppContainer>
    );
  }
}
