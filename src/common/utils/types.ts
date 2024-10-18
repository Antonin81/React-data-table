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
  paginationLength: number;
  paginationStart: number;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
}

export interface theadPropsType {
  headings: tableHeading[];
  attributes: TableHTMLAttributes<any>;
  sort: sortType;
  setSort: React.Dispatch<React.SetStateAction<sortType>>;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
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
  paginationLength: number;
  paginationStart: number;
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
  setPaginationLength: React.Dispatch<React.SetStateAction<number>>;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
}

export interface entriesSelectPropsType {
  id: string;
  setPaginationLength: React.Dispatch<React.SetStateAction<number>>;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
}

export interface bottomSectionPropsType {
  id: string;
  paginationLength: number;
  paginationStart: number;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
  dataSize: number;
}

export interface showEntriesPropsType {
  id: string;
  paginationLength: number;
  paginationStart: number;
  dataSize: number;
}

export interface paginationPropsType {
  id: string;
  paginationLength: number;
  paginationStart: number;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
  dataSize: number;
}

export interface pagesButtonsPropsType {
  id: string;
  paginationLength: number;
  paginationStart: number;
  setPaginationStart: React.Dispatch<React.SetStateAction<number>>;
  dataSize: number;
}
