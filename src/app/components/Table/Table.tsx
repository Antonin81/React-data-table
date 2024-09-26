import { propsType } from "../../../common/utils/types";

function Table({ data, attributes, headings }: propsType) {
  console.log(data, attributes);

  function generateThead() {
    return (
      <thead>
        <tr role="row">
          {headings.map((heading) => {
            return (
              <th
                className="sorting"
                tabIndex={0}
                aria-controls={attributes.id}
                aria-label={
                  heading.title + ": activate to sort column ascending"
                }
                key={heading.title}
              >
                {heading.title}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  function generateTbodyTr(row: Record<string, any>, parity: boolean) {
    const tds = [];
    for (let header of headings) {
      tds.push(<td>{row[header.data]}</td>);
    }
    return (
      <tr role="row" className={parity ? "even" : "odd"}>
        {tds}
      </tr>
    );
  }

  function generateTbody() {
    const trs = [];
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      trs.push(generateTbodyTr(row, !(i % 2 == 0)));
    }
    return <tbody>{trs}</tbody>;
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
      {generateThead()}
      {generateTbody()}
    </table>
  );
}

export default Table;
