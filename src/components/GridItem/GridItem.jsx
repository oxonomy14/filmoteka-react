import css from "./GridItem.module.css";
const GridItem = ({ children }) => {
  return <li className={css["movie-item"]}>{children}</li>;
};
export default GridItem;
