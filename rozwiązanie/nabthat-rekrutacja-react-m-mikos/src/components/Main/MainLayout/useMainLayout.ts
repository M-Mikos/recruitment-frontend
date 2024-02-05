import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addDataIndex,
  replaceDataIndexes,
} from "../../../store/slices/textDataSlice";
import { AppDispatch, RootState } from "../../../store/store";

function useMainLayout() {
  const dispatch: AppDispatch = useDispatch();
  const dataInUse: number[] = useSelector(
    (state: RootState) => state.textData.usedDataIndexes
  );
  const dataItems: string[] = useSelector(
    (state: RootState) => state.textData.data
  );
  const [selectedOption, setSelectedOption] = useState("");

  const isDataInUse = (index: number): boolean => {
    return dataInUse.indexOf(index) === -1 ? false : true;
  };

  const generateRandomIndex = (array: any[]): number =>
    Math.ceil(Math.random() * array.length) - 1;

  const getDataIndex = (): number | void => {
    try {
      switch (selectedOption) {
        case "first":
          return 0;

        case "second":
          return 1;

        case "random":
          // Generate array of unused indexes, wthout first two options
          const randomIndexRange: number[] = [
            ...Array(dataItems.length).keys(),
          ].slice(2);
          const avaliableIndexes: number[] = randomIndexRange.filter((item) => {
            return !dataInUse.includes(item);
          });

          if (avaliableIndexes.length === 0) {
            // If all indexes had been used, get random index (excluding 0 and 1)
            return generateRandomIndex(randomIndexRange) + 2;
          }
          // Get random index from unused indexes
          return avaliableIndexes[generateRandomIndex(avaliableIndexes)];

        default:
          throw new Error("Wybierz opcję w bloku pierwszym.");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const addData = () => {
    const index = getDataIndex() as number;
    if (isDataInUse(index)) alert("Doklejona treść nie jest unikalna");
    dispatch(addDataIndex(index));
  };
  const replaceData = () => {
    dispatch(replaceDataIndexes(getDataIndex()));
  };

  const buttonClickHandler = (action: "add" | "replace") => {
    action === "replace" && replaceData();
    action === "add" && addData();
  };

  return { buttonClickHandler, selectedOption, setSelectedOption };
}

export default useMainLayout;
