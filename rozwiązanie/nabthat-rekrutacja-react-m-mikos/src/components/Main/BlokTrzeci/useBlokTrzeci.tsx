import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

function useBlokTrzeci() {
  const dataInUse = useSelector(
    (state: RootState) => state.textData.usedDataIndexes
  );
  const data = useSelector((state: RootState) => state.textData.data);

  const sortedData = dataInUse.map((i: number) => data[i]).sort();
  return  sortedData ;
}

export default useBlokTrzeci;
