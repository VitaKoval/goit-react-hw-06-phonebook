// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import ContactForm from './contactForm/ContactForm';
import { ContactForm } from './ContactForm';
import { Container } from './ui/App.styled';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
