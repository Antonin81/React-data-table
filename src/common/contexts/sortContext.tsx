import { createContext, ReactNode, useState, useContext } from "react";
import { sortContextType, sortType } from "../utils/types";

export const SortContext = createContext<sortContextType | undefined>(
  undefined
);

export const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sort, setSort] = useState<sortType>({
    column: undefined,
    sortType: undefined,
  });

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSort = (): sortContextType => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSort doit être utilisé dans un SortProvider");
  }
  return context;
};
