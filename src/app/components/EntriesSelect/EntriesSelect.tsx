import { ChangeEvent } from "react";
import { entriesSelectPropsType } from "../../../common/utils/types";
import { usePagination } from "../../../common/contexts/paginationContext";

function EntriesSelect({ id }: entriesSelectPropsType) {
  function handleSelectChange(e: ChangeEvent) {
    const { setPaginationLength, setPaginationStart } = usePagination();
    setPaginationStart(0);
    setPaginationLength(
      parseInt((e.currentTarget as HTMLInputElement).value, 10)
    );
  }

  return (
    <label htmlFor={id + "_length"}>
      Show{" "}
      <select
        name={id + "_length"}
        id={id + "_length"}
        onChange={handleSelectChange}
        aria-controls={id}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>{" "}
      entries
    </label>
  );
}

export default EntriesSelect;
