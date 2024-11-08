import Table from "./components/Table/Table";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import {
  attributesTestAll,
  dataTest,
  headings,
} from "../common/utils/dataTest";

function DataTable() {
  const dataSize = dataTest.length;

  return (
    <div id={attributesTestAll.id! + "_wrapper"} className="dataTables_wrapper">
      <TopSection id={attributesTestAll.id!} />
      <Table
        data={dataTest}
        attributes={attributesTestAll}
        headings={headings}
      />
      <BottomSection id={attributesTestAll.id!} dataSize={dataSize} />
    </div>
  );
}

export default DataTable;
