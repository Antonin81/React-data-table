import Table from "./components/Table/Table";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import { propsType } from "../common/utils/types";
import { useDataToShow } from "../common/contexts/dataToShowContext";

function DataTable({ attributes, data, headings }: propsType) {
  const { dataToShow } = useDataToShow();
  const dataSize = dataToShow.length;

  return (
    <div id={attributes.id! + "_wrapper"} className="dataTables_wrapper">
      <TopSection id={attributes.id!} />
      <Table data={data} attributes={attributes} headings={headings} />
      <BottomSection id={attributes.id!} dataSize={dataSize} />
    </div>
  );
}

export default DataTable;
