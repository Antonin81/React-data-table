import { htmlAttributes, tableHeading } from "../common/utils/types";
import Table from "./components/Table/Table";

function DataTable() {
  let dataTest: Record<string, any>[] = [
    {
      firstName: "yo",
      lastName: "yo",
      dateOfBirth: "2024-02-03",
      startDate: "2024-02-04",
      street: "1 rue du griffoul",
      city: "lacaune",
      state: "France",
      zipCode: 81230,
      department: "ici",
    },
    {
      firstName: "yo2",
      lastName: "yo",
      dateOfBirth: "2024-02-03",
      startDate: "2024-02-04",
      street: "1 rue du griffoul",
      city: "lacaune",
      state: "France",
      zipCode: 81230,
      department: "ici",
    },
    {
      firstName: "yo3",
      lastName: "yo",
      dateOfBirth: "2024-02-03",
      startDate: "2024-02-04",
      street: "1 rue du griffoul",
      city: "lacaune",
      state: "France",
      zipCode: 81230,
      department: "ici",
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
