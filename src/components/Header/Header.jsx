import css from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  return (
    <header>
      <div className={clsx("container", css.header)}>
        <nav className={css.nav}>
          <a
            className={css.navLogo}
            href="./index.html"
            aria-label="BestMovies"
          >
            Best<span>Movies</span>
          </a>
        </nav>
        <div className={css.banner}>
          <img src="/src/img/adb/1.png" alt="advertising banner" />
        </div>
      </div>
    </header>
  );
};

export default Header;
