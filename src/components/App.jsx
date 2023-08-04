
// import shortid from 'shortid';
import style from './App.module.css';
import { useSelector } from 'react-redux';
import { selectItems } from "redux/contacts/contacts-selectors";
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';


const App = () => {
  const contacts = useSelector(selectItems);
  const title = {
    oneTitle: 'Directorio Telefonico',
    scndTitle: 'Contactos',
  }
  return <div className={style.container}>
      <Section title={title.oneTitle}>
        <ContactForm />
      </Section>

      <Section title={title.scndTitle}>
        <Filter/>

        <div className={style.allContacts}>Contactos: {contacts.length} 
        <i class="bi bi-arrow-clockwise"></i>
        </div>
        {contacts.length > 0 ? (
                  <ContactList/>
              ) : (
                  <Notification message="There are no contacts yet" />
              )}
        <refreshIcon/>
      </Section>
    </div>

}
  
export default App;