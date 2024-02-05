import classes from "./index.module.scss";

function BlokDrugi({
  buttonClickHandler,
}: {
  buttonClickHandler: (action: "add" | "replace") => void;
}): JSX.Element {
  return (
    <section className={`${classes.column} ${classes["column--2"]}`}>
      <h2 className={classes.column__title}>Blok Drugi</h2>
      <div className={classes.actions}>
        <button
          className={`${classes.actions__button} ${classes.button}`}
          onClick={() => buttonClickHandler("replace")}
        >
          Zastąp
        </button>
        <button
          className={`${classes.actions__button} ${classes.button}`}
          onClick={() => buttonClickHandler("add")}
        >
          Doklej
        </button>
      </div>
    </section>
  );
}

export default BlokDrugi;
