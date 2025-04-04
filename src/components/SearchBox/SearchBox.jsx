import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <p className={css.txt}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Put your search name contact"
      />
    </>
  );
};

export default SearchBox;
