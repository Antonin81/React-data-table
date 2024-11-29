import Table from "./components/Table/Table";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import { propsType } from "../common/utils/types";
import { DataToShowProvider } from "../common/contexts/dataToShowContext";
import { SortProvider } from "../common/contexts/sortContext";
import { PaginationProvider } from "../common/contexts/paginationContext";
import { SearchProvider } from "../common/contexts/searchContext";
import { dataTest } from "../common/utils/dataTest";
import "./index.css";

function DataTable({ attributes, data, headings }: propsType) {
  return (
    <SortProvider>
      <PaginationProvider>
        <SearchProvider>
          <DataToShowProvider data={dataTest}>
            <div
              id={attributes.id! + "_wrapper"}
              className={
                `data-table_wrapper` +
                (attributes.className ? " " + attributes.className : "")
              }
              {...(attributes.style && {
                style: attributes.style,
              })}
            >
              <TopSection id={attributes.id!} />
              <Table data={data} attributes={attributes} headings={headings} />
              <BottomSection id={attributes.id!} />
            </div>
          </DataToShowProvider>
        </SearchProvider>
      </PaginationProvider>
    </SortProvider>
  );
}

export default DataTable;
