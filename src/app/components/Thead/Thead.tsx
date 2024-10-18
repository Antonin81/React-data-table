import { tableHeading, theadPropsType } from "../../../common/utils/types";

function Thead({
  headings,
  attributes,
  sort,
  setSort,
  setPaginationStart,
}: theadPropsType) {
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

  return (
    <thead>
      <tr role="row">
        {headings.map((heading) => {
          return (
            <th
              className={
                heading.data === sort.column
                  ? sort.sortType === "ASC"
                    ? "sorting_asc"
                    : "sorting_desc"
                  : "sorting"
              }
              tabIndex={0}
              aria-controls={attributes.id}
              aria-label={
                heading.data === sort.column
                  ? sort.sortType === "ASC"
                    ? heading.title + ": activate to sort column descending"
                    : heading.title + ": activate to sort column ascending"
                  : heading.title + ": activate to sort column ascending"
              }
              key={heading.title}
              onClick={() => theadThClickHandler(heading)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.currentTarget.click();
                }
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
