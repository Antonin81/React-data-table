import { showEntriesPropsType } from "../../../common/utils/types";

//needs to know the pagination length, the page we are at, total entries and table id
function ShowEntries({
  id,
  paginationLength,
  paginationStart,
  dataSize,
}: showEntriesPropsType) {
  return (
    <p
      className="data-table_info"
      role="status"
      aria-live="polite"
      id={id + "_info"}
    >
      Showing {paginationStart + 1} to{" "}
      {dataSize < paginationStart + paginationLength
        ? dataSize
        : paginationStart + paginationLength}{" "}
      of {dataSize} entries
    </p>
  );
}
export default ShowEntries;
