import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
import "./index.css";
import { SortProvider } from "../common/contexts/sortContext.tsx";
import { PaginationProvider } from "../common/contexts/paginationContext.tsx";
import { SearchProvider } from "../common/contexts/searchContext.tsx";
import { DataToShowProvider } from "../common/contexts/dataToShowContext.tsx";
import {
  attributesTestAll,
  dataTest,
  headings,
} from "../common/utils/dataTest";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortProvider>
      <PaginationProvider>
        <SearchProvider>
          <DataToShowProvider data={dataTest}>
            <DataTable
              attributes={attributesTestAll}
              data={dataTest}
              headings={headings}
            />
          </DataToShowProvider>
        </SearchProvider>
      </PaginationProvider>
    </SortProvider>
  </StrictMode>
);
