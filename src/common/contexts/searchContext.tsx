import { createContext, ReactNode, useState, useContext } from "react";
import { searchContextType } from "../utils/types";

export const SearchContext = createContext<searchContextType | undefined>(
  undefined
);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [word, setWord] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        word,
        setWord,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): searchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch doit être utilisé dans un SearchProvider");
  }
  return context;
};
