import classes from "./index.module.scss";

function Option({
  label,
  value,
  selected,
  onChange,
}: {
  label: string;
  value: string;
  selected: string;
  onChange: (arg0: string) => void;
}): JSX.Element {
  return (
    <label className={classes.option}>
      <input
        className={classes.option__radio}
        type="radio"
        name="option"
        value={value}
        checked={value === selected}
        onChange={() => onChange(value)}
      />
      <div className={classes.option__checkmark}></div>
      <span className={classes.option__label}>{label}</span>
    </label>
  );
}

export default Option;
