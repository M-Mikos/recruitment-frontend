import classes from "./index.module.scss";
import useBlokTrzeci from "./useBlokTrzeci";

function BlokTrzeci(): JSX.Element {
  const sortedData: string[] = useBlokTrzeci();

  return (
    <section className={`${classes.column} ${classes["column--3"]}`}>
      <h2 className={`${classes.column__title} ${classes["title--long"]}`}>
        Blok z długą nazwą która sama się przytnie lorem ipsum dolor sit amet.
      </h2>
      {sortedData.map((item: string, i: number) => (
        <p key={i} className={classes.output}>
          {item}
        </p>
      ))}
    </section>
  );
}

export default BlokTrzeci;
