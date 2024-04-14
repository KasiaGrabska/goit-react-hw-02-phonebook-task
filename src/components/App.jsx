import { useState } from 'react';
//import { nanoid } from 'nanoid';
export const App = () => {
  const [dataContacts, setDatacontacts] = useState({ contacts: [], name: '', filter: '',
  name: '', number: ''});

  <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
}