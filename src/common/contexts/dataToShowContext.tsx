import { createContext, ReactNode, useState, useContext } from "react";
import { dataToShowContextType } from "../utils/types";

export const DataToShowContext = createContext<
  dataToShowContextType | undefined
>(undefined);

export const DataToShowProvider = ({
  data,
  children,
}: {
  data: Record<string, any>[];
  children: ReactNode;
}) => {
  const [dataToShow, setDataToShow] = useState<Record<string, any>[]>(data);

  return (
    <DataToShowContext.Provider
      value={{
        dataToShow,
        setDataToShow,
      }}
    >
      {children}
    </DataToShowContext.Provider>
  );
};

export const useDataToShow = (): dataToShowContextType => {
  const context = useContext(DataToShowContext);
  if (!context) {
    throw new Error(
      "useDataToShow doit être utilisé dans un DataToShowProvider"
    );
  }
  return context;
};
