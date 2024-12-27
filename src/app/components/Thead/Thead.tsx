import { usePagination } from "../../../common/contexts/paginationContext";
import { useSort } from "../../../common/contexts/sortContext";
import { tableHeading, theadPropsType } from "../../../common/utils/types";

function Thead({ headings, attributes }: theadPropsType) {
  const { sort, setSort } = useSort();

  const { setPaginationStart } = usePagination();

  function theadThClickHandler(heading: tableHeading) {
    setPaginationStart(0);
    if (sort.column === heading.data) {
      if (sort.sortType === "ASC") {
        setSort({ column: heading.data, sortType: "DESC" });
      } else {
        setSort({ column: heading.data, sortType: "ASC" });
      }
    } else {
      setSort({ column: heading.data, sortType: "ASC" });
    }
  }

  const headingSortClass = (heading: tableHeading) => {
    return heading.data === sort.column
      ? sort.sortType === "ASC"
        ? "sorting_asc"
        : "sorting_desc"
      : "sorting";
  };

  const headingAriaLabel = (heading: tableHeading) => {
    return heading.data === sort.column
      ? sort.sortType === "ASC"
        ? heading.title + ": activate to sort column descending"
        : heading.title + ": activate to sort column ascending"
      : heading.title + ": activate to sort column ascending";
  };

  return (
    <thead>
      <tr>
        {headings.map((heading) => {
          return (
            <th className={headingSortClass(heading)} key={heading.title}>
              <button
                aria-controls={attributes.id}
                aria-label={headingAriaLabel(heading)}
                onClick={() => theadThClickHandler(heading)}
              >
                {heading.title}
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Thead;
