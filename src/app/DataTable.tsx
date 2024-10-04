import { htmlAttributes, tableHeading } from "../common/utils/types";
import Table from "./components/Table/Table";

function DataTable() {
  let dataTest: Record<string, any>[] = [
    {
      firstName: "yo2",
      lastName: "yo3",
      dateOfBirth: "2024-02-01",
      startDate: "2024-02-04",
      street: "1 rue du griffoul",
      city: "lacaune",
      state: "France",
      zipCode: "81230",
      department: "ici",
      testNumber: 1,
      testBoolean: true,
    },
    {
      firstName: "yo",
      lastName: "yo2",
      dateOfBirth: "2023-02-03",
      startDate: "2021-02-04",
      street: "1 rue du gribboul",
      city: "castres",
      state: "France",
      zipCode: "81200",
      department: "là",
      testNumber: 3,
      testBoolean: false,
    },
    {
      firstName: "yo3",
      lastName: "yo",
      dateOfBirth: "2024-02-03",
      startDate: "2026-02-04",
      street: "2 rue du griffoul",
      city: "tombouctou",
      state: "Mali",
      zipCode: "00000",
      department: "jsp",
      testNumber: 2,
      testBoolean: true,
    },
  ];

  let headings: tableHeading[] = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
    { title: "Test nombres", data: "testNumber" },
    { title: "Test booléens", data: "testBoolean" },
  ];

  let attributesTestNothing: htmlAttributes = {
    id: "table",
    classes: undefined,
    ariaDescribedBy: undefined,
    style: undefined,
  };

  let attributesTestAll: htmlAttributes = {
    id: "table-test-all",
    classes: "table table-2",
    ariaDescribedBy: "table-desc-text",
    style: "background-color: #f3f3f3;",
  };

  return (
    <div className="all-data-table-container">
      <Table
        data={dataTest}
        attributes={attributesTestAll}
        headings={headings}
      />
    </div>
  );
}

export default DataTable;
