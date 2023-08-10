import React from "react";
import {
  AnalyticalTable,
  Card,
  CardHeader,
  Icon,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    user: {
      name: `user.Name${index}`,
      age: Math.floor(Math.random() * 100),
    },
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "user Name",
    accessor: "user.name",
  },
  {
    Header: "user Age",
    accessor: "user.age",
  },
];

export function UserTableCard() {
  return (
    <>
      <Card
        header={
          <CardHeader
            titleText="Users"
            avatar={<Icon name={tableViewIcon} />}
          />
        }
        style={{
          maxWidth: "1050px",
          ...spacing.sapUiContentPadding,
          color: ThemingParameters.sapNegativeColor,
          fontSize: ThemingParameters.sapFontHeader1Size,
        }}
      >
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          visibleRows={5}
        />
      </Card>
    </>
  );
}
