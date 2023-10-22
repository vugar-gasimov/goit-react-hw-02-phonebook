import React from 'react';
import { ContactBook } from './Contact-Book/ContactBook';
import { AppContainer, TitleContainer, ContentContainer } from './App.Styled';
export const App = () => {
  return (
    <AppContainer>
      <TitleContainer>React homework template</TitleContainer>
      <ContentContainer>
        <ContactBook />
      </ContentContainer>
    </AppContainer>
  );
};
