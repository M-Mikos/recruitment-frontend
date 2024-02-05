import classes from "./index.module.scss";

function OptionItem({
  label,
  clickHandler,
}: {
  label: string;
  clickHandler: () => void;
}): JSX.Element {
  return (
    <li>
      <button className={classes.option} onClick={clickHandler}>
        <div className={classes.option__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(90 12 12)">
              <path
                fill="currentColor"
                d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
              />
            </g>
          </svg>
        </div>
        {label}
      </button>
    </li>
  );
}

export default OptionItem;
