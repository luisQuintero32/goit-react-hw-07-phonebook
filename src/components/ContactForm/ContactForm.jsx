import React from 'react';
import { selectItems } from 'redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

import style from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let contactForAdd = { name: form.name.value, phone: form.number.value };
    console.log('Form ', contactForAdd);
    if (contacts.some(({ name }) => name === contactForAdd.name)) {
      alert(`${contactForAdd.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contactForAdd));
    form.reset();
  };

  return (
    <div className={style.inputContent}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputsCont}>
          <p>Nombre </p>
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Numero</p>

          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button type="submit" className={style.buttonEditor}>
          Añadir
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
