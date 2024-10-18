import { paginationPropsType } from "../../../common/utils/types";
import PagesButtons from "../PagesButtons/PagesButtons";

function Pagination({
  id,
  paginationLength,
  paginationStart,
  setPaginationStart,
  dataSize,
}: paginationPropsType) {
  return (
    <div>
      <a
        id={id + "_previous"}
        className={
          "paginate_button previous" +
          (paginationStart === 0 ? " disabled" : "")
        }
        tabIndex={paginationStart === 0 ? -1 : 0}
        onClick={() => {
          if (paginationStart !== 0) {
            setPaginationStart(paginationStart - paginationLength);
          }
        }}
        aria-controls={id}
      >
        Previous
      </a>
      <PagesButtons
        id={id}
        paginationLength={paginationLength}
        paginationStart={paginationStart}
        setPaginationStart={setPaginationStart}
        dataSize={dataSize}
      />
      <a
        id={id + "_next"}
        className={
          "paginate_button next" +
          (paginationStart + paginationLength >= dataSize ? " disabled" : "")
        }
        tabIndex={paginationStart + paginationLength >= dataSize ? -1 : 0}
        onClick={() => {
          if (paginationStart + paginationLength < dataSize) {
            setPaginationStart(paginationStart + paginationLength);
          }
        }}
        aria-controls={id}
      >
        Next
      </a>
    </div>
  );
}

export default Pagination;
