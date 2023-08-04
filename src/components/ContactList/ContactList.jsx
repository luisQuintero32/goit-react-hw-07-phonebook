import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectItems, selectFilter } from 'redux/contacts/contacts-selectors';
import style from './ContactList.module.css';

import { deleteContact } from 'redux/contacts/contacts-operations';
import { fetchContact } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteId = (contact) => {
    dispatch(deleteContact(contact));
  };

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {contacts.filter(({name}) => name.toLowerCase().includes(filter.trim())).map(({id, name, number}) => (
          <li key={id} className={style.item}>
            <div className={style.contDetail}>
              <p className={style.name}>{name}</p>
              <p className={style.number}>{number}</p>
            </div>
            <button
              className={style.btn}
              type="submit"
              onClick={() => deleteId(id)}
            >
              Borrar
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
