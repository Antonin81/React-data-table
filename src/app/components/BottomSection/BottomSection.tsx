import { useDataToShow } from "../../../common/contexts/dataToShowContext";
import { bottomSectionPropsType } from "../../../common/utils/types";
import Pagination from "../Pagination/Pagination";
import ShowEntries from "../ShowEntries/ShowEntries";

function BottomSection({ id }: bottomSectionPropsType) {
  const { dataToShow } = useDataToShow();
  const dataSize = dataToShow.length;
  return (
    <div className="data-table-bottom-section">
      <ShowEntries id={id} dataSize={dataSize} />
      <Pagination id={id} dataSize={dataSize} />
    </div>
  );
}

export default BottomSection;
