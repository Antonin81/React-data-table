import { useEffect } from "react";
import { propsType } from "../../../common/utils/types";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import { testDataOrder } from "../../../common/helpers/functions";
import { useSort } from "../../../common/contexts/sortContext";
import { usePagination } from "../../../common/contexts/paginationContext";
import { useSearch } from "../../../common/contexts/searchContext";
import { useDataToShow } from "../../../common/contexts/dataToShowContext";

function Table({ data, attributes, headings }: propsType) {
  const { dataToShow, setDataToShow } = useDataToShow();
  const { sort } = useSort();
  const { paginationStart, paginationLength, setPaginationStart } =
    usePagination();
  const { word } = useSearch();

  useEffect(() => {
    if (sort.column === undefined) {
      setDataToShow(sortNeededData());
    } else {
      reorderData(sortNeededData());
    }
  }, [sort, word]);

  useEffect(() => {
    setPaginationStart(0);
  }, [word]);

  function reorderData(sortedData: Record<string, any>[]) {
    if (sort.column) {
      const dataToOrder = [...sortedData];
      let orderedData =
        sort.sortType === "ASC"
          ? dataToOrder.sort((a: Record<string, any>, b: Record<string, any>) =>
              testDataOrder(a, b, sort.column!)
            )
          : dataToOrder.sort((a: Record<string, any>, b: Record<string, any>) =>
              testDataOrder(b, a, sort.column!)
            );
      setDataToShow(orderedData);
    }
  }

  function sortNeededData() {
    if (word === "") {
      return data;
    }
    const dataToSort = [...data];
    const sortedData: Record<string, any>[] = [];
    dataToSort.forEach((row) => {
      if (isRowAccepted(row)) {
        sortedData.push(row);
      }
    });
    return sortedData;
  }

  const isRowAccepted = (row: Record<string, any>) => {
    if (headings) {
      for (let heading of headings) {
        const typeOfData = typeof row[heading.data];
        if (
          typeOfData == "string" &&
          row[heading.data].toLowerCase().includes(word.toLowerCase())
        ) {
          return true;
        }
        if (
          typeOfData == "number" &&
          row[heading.data].toString().includes(word.toLowerCase())
        ) {
          return true;
        }
        if (
          typeOfData == "boolean" &&
          row[heading.data].toString().includes(word.toLowerCase())
        ) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <table
      id={attributes.id}
      role="grid"
      aria-describedby={attributes.id + "_info"}
      className="data-table"
    >
      <Thead headings={headings} attributes={attributes} />
      <Tbody
        data={dataToShow.slice(
          paginationStart,
          paginationStart + paginationLength
        )}
        headings={headings}
        column={sort.column!}
      />
    </table>
  );
}

export default Table;
