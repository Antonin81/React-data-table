import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import {
  attributesTestTheme,
  dataTest,
  headings,
} from "../common/utils/dataTest";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataTable
      attributes={attributesTestTheme}
      data={dataTest}
      headings={headings}
    />
  </StrictMode>
);
