import { tbodyPropsType } from "../../../common/utils/types";
import TbodyTr from "../TbodyTr/TbodyTr";

function Tbody({ data, headings, column }: tbodyPropsType) {
  return (
    <tbody>
      {data.map((row, i) => (
        <TbodyTr
          row={row}
          parity={!(i % 2 == 0)}
          key={i}
          headings={headings}
          column={column}
        />
      ))}
    </tbody>
  );
}

export default Tbody;
