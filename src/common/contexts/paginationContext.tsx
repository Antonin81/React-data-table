import { createContext, ReactNode, useState, useContext } from "react";
import { paginationContextType } from "../utils/types";

export const PaginationContext = createContext<
  paginationContextType | undefined
>(undefined);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [paginationLength, setPaginationLength] = useState<number>(10);
  const [paginationStart, setPaginationStart] = useState<number>(0);

  return (
    <PaginationContext.Provider
      value={{
        paginationLength,
        paginationStart,
        setPaginationLength,
        setPaginationStart,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = (): paginationContextType => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "usePagination doit être utilisé dans un PaginationProvider"
    );
  }
  return context;
};
