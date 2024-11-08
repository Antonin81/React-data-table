import { bottomSectionPropsType } from "../../../common/utils/types";
import Pagination from "../Pagination/Pagination";
import ShowEntries from "../ShowEntries/ShowEntries";

function BottomSection({ id, dataSize }: bottomSectionPropsType) {
  return (
    <div className="data-table-bottom-section">
      <ShowEntries id={id} dataSize={dataSize} />
      <Pagination id={id} dataSize={dataSize} />
    </div>
  );
}

export default BottomSection;
