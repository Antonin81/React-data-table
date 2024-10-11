import { useEffect, useState } from "react";
import { propsType, sortType } from "../../../common/utils/types";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import { testDataOrder } from "../../../common/helpers/functions";

function Table({ data, attributes, headings }: propsType) {
  const [sort, setSort] = useState<sortType>({
    column: undefined,
    sortType: undefined,
  });

  const [dataToShow, setDataToShow] = useState<Record<string, any>[]>(data);

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
      {...(attributes["aria-describedby"] && {
        "aria-describedby": attributes["aria-describedby"],
      })}
      {...(attributes.style && {
        style: attributes.style,
      })}
    >
      <Thead
        headings={headings}
        attributes={attributes}
        sort={sort}
        setSort={setSort}
      />
      <Tbody data={dataToShow} headings={headings} column={sort.column!} />
    </table>
  );
}

export default Table;
