import css from "./Hero.module.css";
import clsx from "clsx";
const Hero = () => {
  return (
    <section>
      <div className={clsx("container", css.wrapper, css.hero)}>
        <h1 className={css.title}>
          Explore the World of Cinema: <span>The Best Movies</span> in One
          Catalog!
        </h1>
        <button className={css["section-top-button"]} type="button">
          Search Movie
        </button>
      </div>
    </section>
  );
};
export default Hero;
