import { usePagination } from "../../../common/contexts/paginationContext";
import { showEntriesPropsType } from "../../../common/utils/types";

function ShowEntries({ id, dataSize }: showEntriesPropsType) {
  const { paginationStart, paginationLength } = usePagination();

  const maxToShow =
    dataSize < paginationStart + paginationLength
      ? dataSize
      : paginationStart + paginationLength;

  const paginationStartingItem = paginationStart + 1;

  return (
    <p
      className="data-table_info"
      role="status"
      aria-live="polite"
      id={id + "_info"}
    >
      Showing {paginationStartingItem} to {maxToShow} of {dataSize} entries
    </p>
  );
}
export default ShowEntries;
