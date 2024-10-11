import { TableHTMLAttributes } from "react";

export interface htmlAttributes {
  id: string;
  classes: string | undefined;
  ariaDescribedBy: string | undefined;
  style: string | undefined;
}

export interface propsType {
  data: Record<string, any>[];
  attributes: TableHTMLAttributes<any>;
  headings: tableHeading[];
}

export interface theadPropsType {
  headings: tableHeading[];
  attributes: TableHTMLAttributes<any>;
  sort: sortType;
  setSort: React.Dispatch<React.SetStateAction<sortType>>;
}

export interface tbodyTrPropsType {
  row: Record<string, any>;
  parity: boolean;
  headings: tableHeading[];
  column: string;
}

export interface tbodyPropsType {
  data: Record<string, any>[];
  headings: tableHeading[];
  column: string;
}

export interface tableHeading {
  title: string;
  data: string;
}

export interface sortType {
  column: string | undefined;
  sortType: "ASC" | "DESC" | undefined;
}
