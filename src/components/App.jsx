import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./App.css";

import { nanoid } from "nanoid";

import phonebook from "../assets/phonebook.json";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  const [contact, setContact] = useState(
    () => JSON.parse(localStorage.getItem("contact")) ?? phonebook
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const visibleContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (values, actions) => {
    const newContact = {
      id: nanoid(), // Генеруємо унікальний ID
      ...values,
    };

    setContact([...contact, newContact]); // Передаємо новий контакт у функцію
    actions.resetForm();
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contact.filter((item) => item.id !== contactId);
    setContact(updatedContacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contact={visibleContacts} onDelete={handleDeleteContact} />
    </>
  );
};

export default App;
