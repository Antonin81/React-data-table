import { useEffect, useState } from "react";
import { propsType } from "../../../common/utils/types";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import { testDataOrder } from "../../../common/helpers/functions";
import { useSort } from "../../../common/contexts/sortContext";
import { usePagination } from "../../../common/contexts/paginationContext";

function Table({ data, attributes, headings }: propsType) {
  const [dataToShow, setDataToShow] = useState<Record<string, any>[]>(data);

  const { sort } = useSort();
  const { paginationStart, paginationLength } = usePagination();

  useEffect(() => {
    reorderData();
  }, [sort]);

  function reorderData() {
    if (sort.column) {
      const dataToOrder = [...data];
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

  return (
    <table
      id={attributes.id}
      {...(attributes.className && { className: attributes.className })}
      role="grid"
      aria-describedby={attributes.id + "_info"}
      {...(attributes.style && {
        style: attributes.style,
      })}
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
