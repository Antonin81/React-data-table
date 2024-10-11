import { tbodyTrPropsType } from "../../../common/utils/types";

function TbodyTr({ row, parity, headings, column }: tbodyTrPropsType) {
  return (
    <tr role="row" className={parity ? "even" : "odd"}>
      {headings.map((heading, i) => (
        <td
          key={row[heading.data] + "-i" + i}
          {...(column == heading.data && {
            className: "sorting_1",
          })}
        >
          {row[heading.data] !== undefined
            ? `${row[heading.data]}`
            : "Non renseigné"}
        </td>
      ))}
    </tr>
  );
}

export default TbodyTr;
