import "./styles/global/main.scss";

import FooterLayout from "./components/Footer/FooterLayout";
import HeaderLayout from "./components/Header/HeaderLayout";
import MainLayout from "./components/Main/MainLayout";
import { useEffect } from "react";
import { AppDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { loadData } from "./store/slices/textDataSlice";

function App(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  // TODO: json error handling

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/assets/data.json");
      const json = await data.json();
      if (json.textData.length === 0) alert("Tablica danych jest pusta");
      dispatch(loadData(json.textData));
    };

    try {
      fetchData();
    } catch (error) {
      alert("Nie udało się pobrać danych");
    }
  }, []);

  return (
    <>
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </>
  );
}

export default App;
