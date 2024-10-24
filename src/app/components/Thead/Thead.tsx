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

  function handleKeyUp(e: React.KeyboardEvent<HTMLTableHeaderCellElement>) {
    if (e.key === "Enter") {
      (e.currentTarget! as HTMLElement).click();
    }
  }

  return (
    <thead>
      <tr role="row">
        {headings.map((heading) => {
          return (
            <th
              className={headingSortClass(heading)}
              tabIndex={0}
              aria-controls={attributes.id}
              aria-label={headingAriaLabel(heading)}
              key={heading.title}
              onClick={() => theadThClickHandler(heading)}
              onKeyUp={(e) => {
                handleKeyUp(e);
              }}
            >
              {heading.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Thead;
