import Logo from "../Logo";
import Title from "../Title";
import classes from "./index.module.scss";

function HeaderLayout(): JSX.Element {
  return (
    <header className={classes.header}>
      <Logo />
      <Title />
    </header>
  );
}

export default HeaderLayout;
