import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import {
  attributesTestAll,
  dataTest,
  headings,
} from "../common/utils/dataTest";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataTable
      attributes={attributesTestAll}
      data={dataTest}
      headings={headings}
    />
  </StrictMode>
);
