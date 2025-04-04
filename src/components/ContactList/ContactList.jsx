import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { RiContactsBookLine } from "react-icons/ri";

const ContactList = ({ contact, onDelete }) => {
  return (
    <>
      <div className={css.wrapperContactList}>
        <h2 className={css.titleContactList}>
          <RiContactsBookLine size={48} className={css.icon} />
          My Contacts List
        </h2>
        <ul className={css.contactList}>
          {contact.map((item) => (
            <Contact key={item.id} item={item} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
