import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataTable />
  </StrictMode>
);
