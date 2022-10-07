import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';
import {
  FormForAddContact,
  Label,
  Input,
  ButtomAddContact,
} from './ui/ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();

  const newContact = {
    name,
    number,
    id,
  };

  const dispatch = useDispatch();

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };
    
  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(add(newContact));

    setName('');
    setNumber('');
  };

  return (
    <FormForAddContact onSubmit={handleSubmit}>
      <Label htmlFor="ContactName">Name</Label>
      <Input
        type="text"
        name="name"
        id="ContactName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter a name to add to contacts"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChangeName}
        required
      />

      <Label htmlFor="ContactNumber">Number </Label>
      <Input
        type="tel"
        name="number"
        id="ContactNumber"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        placeholder="Enter a phone number to add to contacts"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChangeNumber}
        required
      />

      <ButtomAddContact type="submit">Add contact</ButtomAddContact>
    </FormForAddContact>
  );
}
