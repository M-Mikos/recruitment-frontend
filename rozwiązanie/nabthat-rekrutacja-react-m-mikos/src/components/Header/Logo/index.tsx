import classes from "./index.module.scss";

function Logo(): JSX.Element {
  return (
    <div className={classes.logo}>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m3 2l1.6 17.8L12 22l7.5-2.2L21 2zm14 6H9l.2 2H17l-.6 6.6l-4.2 1.4l-4.3-1.4l-.3-3h2l.2 1.4l2.4.8l2.3-.7l.3-3H7.4L7 6h10.4z"
          />
        </svg>
      </a>
    </div>
  );
}

export default Logo;
