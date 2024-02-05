import BlokDrugi from "../BlokDrugi";
import BlokPierwszy from "../BlokPierwszy";
import BlokTrzeci from "../BlokTrzeci";
import classes from "./index.module.scss";
import useMainLayout from "./useMainLayout";

function MainLayout(): JSX.Element {
  const { buttonClickHandler, selectedOption, setSelectedOption } =
    useMainLayout();

  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>Nagłówek H1</h1>
      <BlokPierwszy
        option={selectedOption}
        onOptionChange={setSelectedOption}
      />
      <BlokDrugi buttonClickHandler={buttonClickHandler} />
      <BlokTrzeci />
    </main>
  );
}

export default MainLayout;
