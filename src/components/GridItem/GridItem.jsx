import css from "./GridItem.module.css";
const GridItem = ({ children }) => {
  return <li className={css["last-movie-item"]}>{children}</li>;
};
export default GridItem;
