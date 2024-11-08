import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import "./index.css";
import { SortProvider } from "../common/contexts/sortContext.tsx";
import { PaginationProvider } from "../common/contexts/paginationContext.tsx";
import { SearchProvider } from "../common/contexts/searchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortProvider>
      <PaginationProvider>
        <SearchProvider>
          <DataTable />
        </SearchProvider>
      </PaginationProvider>
    </SortProvider>
  </StrictMode>
);
