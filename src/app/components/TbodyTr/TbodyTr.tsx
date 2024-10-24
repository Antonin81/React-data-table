import { tableHeading, tbodyTrPropsType } from "../../../common/utils/types";

function TbodyTr({ row, parity, headings, column }: tbodyTrPropsType) {
  const parityControl = () => {
    return parity ? "even" : "odd";
  };

  const rowExistenceControl = (heading: tableHeading) => {
    return row[heading.data] !== undefined
      ? `${row[heading.data]}`
      : "Non renseigné";
  };

  return (
    <tr role="row" className={parityControl()}>
      {headings.map((heading, i) => (
        <td
          key={row[heading.data] + "-i" + i}
          {...(column == heading.data && {
            className: "sorting_1",
          })}
        >
          {rowExistenceControl(heading)}
        </td>
      ))}
    </tr>
  );
}

export default TbodyTr;
