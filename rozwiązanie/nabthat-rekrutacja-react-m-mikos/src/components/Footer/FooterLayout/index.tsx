import FooterOptions from "../FooterOptions";
import classes from "./index.module.scss";

function FooterLayout(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__css}>
        CSS
        <br />
        is
        <br />
        awesome
      </div>
      <div className={classes.footer__title}>nabthat</div>
      <FooterOptions />
    </footer>
  );
}

export default FooterLayout;
