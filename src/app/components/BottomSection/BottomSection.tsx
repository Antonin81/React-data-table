import { bottomSectionPropsType } from "../../../common/utils/types";
import Pagination from "../Pagination/Pagination";
import ShowEntries from "../ShowEntries/ShowEntries";

function BottomSection({
  id,
  paginationLength,
  paginationStart,
  setPaginationStart,
  dataSize,
}: bottomSectionPropsType) {
  return (
    <div className="bottom-section">
      <ShowEntries
        id={id}
        paginationLength={paginationLength}
        paginationStart={paginationStart}
        dataSize={dataSize}
      />
      <Pagination
        id={id}
        paginationLength={paginationLength}
        paginationStart={paginationStart}
        setPaginationStart={setPaginationStart}
        dataSize={dataSize}
      />
    </div>
  );
}

export default BottomSection;
