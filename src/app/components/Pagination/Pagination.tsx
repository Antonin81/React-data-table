import { useMemo } from "react";
import { usePagination } from "../../../common/contexts/paginationContext";
import { paginationPropsType } from "../../../common/utils/types";
import PagesButtons from "../PagesButtons/PagesButtons";

function Pagination({ id, dataSize }: paginationPropsType) {
  const { paginationStart, setPaginationStart, paginationLength } =
    usePagination();

  function previousPage() {
    if (paginationStart !== 0) {
      setPaginationStart(paginationStart - paginationLength);
    }
  }

  function nextPage() {
    if (paginationStart + paginationLength < dataSize) {
      setPaginationStart(paginationStart + paginationLength);
    }
  }

  const disablingControlStart = useMemo(() => {
    return paginationStart === 0 ? " disabled" : "";
  }, [paginationStart]);

  const disablingControlEnd =
    paginationStart + paginationLength >= dataSize ? " disabled" : "";

  return (
    <div>
      <button
        id={id + "_previous"}
        className={"paginate_button previous" + disablingControlStart}
        onClick={previousPage}
        {...(disablingControlStart && {
          disabled: true,
        })}
        aria-controls={id}
        aria-label="Shows the previous data selection"
      >
        Previous
      </button>
      <PagesButtons id={id} dataSize={dataSize} />
      <button
        id={id + "_next"}
        className={"paginate_button next" + disablingControlEnd}
        onClick={nextPage}
        {...(disablingControlEnd && {
          disabled: true,
        })}
        aria-controls={id}
        aria-label="Shows the next data selection"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
