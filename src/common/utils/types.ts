export interface htmlAttributes {
  id: string;
  classes: string | undefined;
  ariaDescribedBy: string | undefined;
  style: string | undefined;
}

export interface propsType {
  data: Record<string, any>[];
  attributes: htmlAttributes;
  headings: tableHeading[];
}

export interface theadPropsType {
  headings: tableHeading[];
}

export interface tbodyTrPropsType {
  row: Record<string, any>;
  parity: boolean;
}

export interface tbodyPropsType {
  data: Record<string, any>[];
}

export interface tableHeading {
  title: string;
  data: string;
}
