import Option from "./Option";
import classes from "./index.module.scss";

function BlokPierwszy({
  option,
  onOptionChange,
}: {
  option: string;
  onOptionChange: (arg0: string) => void;
}): JSX.Element {
  return (
    <section className={`${classes.column} ${classes["column--1"]}`}>
      <h2 className={classes.column__title}>Blok Pierwszy</h2>
      <fieldset className={classes.options}>
        <Option
          value={"first"}
          label={"Opcja pierwsza"}
          selected={option}
          onChange={onOptionChange}
        />
        <Option
          value={"second"}
          label={"Opcja druga"}
          selected={option}
          onChange={onOptionChange}
        />
        <Option
          value={"random"}
          label={"Opcja losowa"}
          selected={option}
          onChange={onOptionChange}
        />
      </fieldset>
    </section>
  );
}

export default BlokPierwszy;
