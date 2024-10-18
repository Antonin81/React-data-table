import Table from "./components/Table/Table";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import {
  attributesTestAll,
  dataTest,
  headings,
} from "../common/utils/dataTest";
import { useState } from "react";

function DataTable() {
  const [paginationLength, setPaginationLength] = useState<number>(10);
  const [paginationStart, setPaginationStart] = useState<number>(0);
  const dataSize = dataTest.length;

  return (
    <div id={attributesTestAll.id! + "_wrapper"} className="dataTables_wrapper">
      <TopSection
        id={attributesTestAll.id!}
        setPaginationLength={setPaginationLength}
        setPaginationStart={setPaginationStart}
      />
      <Table
        data={dataTest}
        attributes={attributesTestAll}
        headings={headings}
        paginationLength={paginationLength}
        paginationStart={paginationStart}
        setPaginationStart={setPaginationStart}
      />
      <BottomSection
        id={attributesTestAll.id!}
        paginationLength={paginationLength}
        paginationStart={paginationStart}
        setPaginationStart={setPaginationStart}
        dataSize={dataSize}
      />
    </div>
  );
}

export default DataTable;
