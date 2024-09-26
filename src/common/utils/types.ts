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

export interface tableHeading {
  title: string;
  data: string;
}
