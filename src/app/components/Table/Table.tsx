import { useEffect, useState } from "react";
import {
  propsType,
  tableHeading,
  tbodyPropsType,
  tbodyTrPropsType,
  theadPropsType,
} from "../../../common/utils/types";

function Table({ data, attributes, headings }: propsType) {
  const [sort, setSort] = useState<{
    column: string | undefined;
    sortType: "ASC" | "DESC" | undefined;
  }>({ column: undefined, sortType: undefined });

  const [dataToShow, setDataToShow] = useState<Record<string, any>[]>(data);

  useEffect(() => {
    reorderData();
  }, [sort]);

  function testOrderString(
    a: Record<string, string>,
    b: Record<string, string>
  ) {
    return a[sort.column!].localeCompare(b[sort.column!]);
  }

  function testOrderNumber(
    a: Record<string, number>,
    b: Record<string, number>
  ) {
    if (a[sort.column!] < b[sort.column!]) {
      return -1;
    } else if (a[sort.column!] === b[sort.column!]) {
      return 0;
    } else {
      return 1;
    }
  }

  function testOrderBoolean(
    a: Record<string, boolean>,
    b: Record<string, boolean>
  ) {
    console.log(a, b);

    if (a[sort.column!] === b[sort.column!]) {
      return 0;
    } else if (a[sort.column!] && !b[sort.column!]) {
      return -1;
    } else {
      return 1;
    }
  }

  function testDataOrder(a: Record<string, any>, b: Record<string, any>) {
    switch (typeof a[sort.column!]) {
      case "string":
        return testOrderString(a, b);
      case "number":
        return testOrderNumber(a, b);
      case "boolean":
        return testOrderBoolean(a, b);
      default:
        return 0;
    }
  }

  function reorderData() {
    if (sort.column) {
      const dataToOrder = [...data];
      let orderedData =
        sort.sortType === "ASC"
          ? dataToOrder.sort(
              (a: Record<string, any>, b: Record<string, any>) => {
                return testDataOrder(a, b);
              }
            )
          : dataToOrder.sort(
              (a: Record<string, any>, b: Record<string, any>) => {
                return testDataOrder(b, a);
              }
            );
      setDataToShow(orderedData);
    }
  }

  function theadThClickHandler(e: React.MouseEvent, heading: tableHeading) {
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

  function Thead({ headings }: theadPropsType) {
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
                onClick={(e) => theadThClickHandler(e, heading)}
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

  function TbodyTr({ row, parity }: tbodyTrPropsType) {
    return (
      <tr role="row" className={parity ? "even" : "odd"}>
        {headings.map((header, i) => (
          <td key={row[header.data] + "-i" + i}>
            {row[header.data] !== undefined
              ? `${row[header.data]}`
              : "Non renseigné"}
          </td>
        ))}
      </tr>
    );
  }

  function Tbody({ data }: tbodyPropsType) {
    return (
      <tbody>
        {data.map((row, i) => (
          <TbodyTr row={row} parity={!(i % 2 == 0)} key={i} />
        ))}
      </tbody>
    );
  }

  return (
    <table
      id={attributes.id}
      {...(attributes.classes && { className: attributes.classes })}
      role="grid"
      {...(attributes.ariaDescribedBy && {
        "aria-describedby": attributes.ariaDescribedBy,
      })}
    >
      <Thead headings={headings} />
      <Tbody data={dataToShow} />
    </table>
  );
}

export default Table;
