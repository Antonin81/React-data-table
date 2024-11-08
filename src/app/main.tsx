import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import "./index.css";
import { SortProvider } from "../common/contexts/sortContext.tsx";
import { PaginationProvider } from "../common/contexts/paginationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortProvider>
      <PaginationProvider>
        <DataTable />
      </PaginationProvider>
    </SortProvider>
  </StrictMode>
);
