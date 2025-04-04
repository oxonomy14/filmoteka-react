import css from "./Contact.module.css";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";

const Contact = ({ item, onDelete }) => {
  return (
    <>
      <li className={css.contactItem}>
        <div>
          <h3 className={css.titleContactItem}>
            <GrUserManager size={28} className={css.icon} />
            {item.name}
          </h3>

          <p className={css.phoneContactItem}>
            <MdOutlineContactPhone size={28} className={css.icon} />
            {item.number}
          </p>
        </div>
        <div>
          <button
            type="button"
            className={css.buttonContactItem}
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default Contact;
