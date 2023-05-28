import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhonebookImg } from './PhonebookImg/PhonebookImg';
import css from './styles/styles.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = evt => {
    const id = nanoid();
    const name = evt.name;
    const number = evt.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  сontactFiltered = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  handleDelete = evt => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== evt),
    }));
  };

  render() {
    const { filter } = this.state;

    return (      
      <div className={css.container}>
        <h1 hidden>HW #2</h1>        
        <div className={css.containerPhonebookStyles}>
          <PhonebookImg />
          <section> 
            <h2>Phonebook</h2>
            <ContactForm handleSubmit={this.handleSubmit} />          
          </section>
          <section>
            <h2> Contacts</h2>
            <Filter filter={filter} handleChange={this.handleChange} />
            <ContactList
              contacts={this.сontactFiltered()}
              handleDelete={this.handleDelete}
            /> 
          </section>                       
        </div>
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
}