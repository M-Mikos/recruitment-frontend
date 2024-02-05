import { useDispatch } from "react-redux";
import OptionItem from "./OptionItem";
import classes from "./index.module.scss";
import { clearDataIndexes } from "../../../store/slices/textDataSlice";

import { toggleName } from "../../../store/slices/uiSlice";

function FooterOptions(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className={classes.options}>
      <input
        className={classes.options__checkbox}
        type="checkbox"
        id="options_toggle"
      />

      <label
        className={`${classes.button} ${classes.options__button}`}
        htmlFor="options_toggle"
      >
        Pokaż
        <div className={classes.options__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
            />
          </svg>
        </div>
      </label>
      <ul className={`${classes.options__menu} ${classes.menu}`}>
        <OptionItem
          label="Zresetuj ustawienia"
          clickHandler={() => dispatch(clearDataIndexes())}
        />
        <OptionItem
          clickHandler={() => dispatch(toggleName())}
          label="Pokaż dane osobowe"
        />
      </ul>
    </div>
  );
}

export default FooterOptions;
