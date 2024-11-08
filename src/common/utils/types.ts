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

export interface topSectionPropsType {
  id: string;
}

export interface entriesSelectPropsType {
  id: string;
}

export interface bottomSectionPropsType {
  id: string;
  dataSize: number;
}

export interface showEntriesPropsType {
  id: string;
  dataSize: number;
}

export interface paginationPropsType {
  id: string;
  dataSize: number;
}

export interface pagesButtonsPropsType {
  id: string;
  dataSize: number;
}

export interface pageButtonPropsType {
  i: number;
}

export interface sortContextType {
  sort: sortType;
  setSort: React.Dispatch<React.SetStateAction<sortType>>;
}

export interface paginationContextType {
  paginationLength: number;
  paginationStart: number;
  setPaginationLength: React.Dispatch<React.SetStateAction<number>>;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
}

export interface searchContextType {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}

export interface displayButtonsPropsType {
  array: number[];
  displayMode: string;
}

export interface searchBarPropsType {
  id: string;
}
