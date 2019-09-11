import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Table from ".";

const columns = [
  {
    Header: "A",
    accessor: "a",
  },
  {
    Header: "B",
    accessor: "b",
  },
  {
    Header: "C",
    accessor: "c",
  },
];

const data = [...new Array(50)].map(() => ({
  a: Math.random(),
  b: Math.random(),
  c: Math.random(),
}));

const stories = storiesOf("Table", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => <Table columns={columns} data={data} />);
