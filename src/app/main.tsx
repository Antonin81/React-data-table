import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import "./index.css";
import { SortProvider } from "../common/contexts/sortContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortProvider>
      <DataTable />
    </SortProvider>
  </StrictMode>
);
