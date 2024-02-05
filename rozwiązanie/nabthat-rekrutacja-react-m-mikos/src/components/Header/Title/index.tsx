import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import { RootState } from "../../../store/store";

function Title(): JSX.Element {
  const isNameVisible = useSelector(
    (state: RootState) => state.ui.isNameVisible
  );

  return (
    <div className={classes.title}>
      <div className={classes.title__subject}>
        Zadanie <strong>rekrutacyjne</strong>
      </div>
      <div className={classes.title__name}>
        {isNameVisible && "Marcin Mikos"}
      </div>
    </div>
  );
}

export default Title;
